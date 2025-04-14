import { useEffect, useState } from "react";
import { reportsByUserID } from "@/graphql/queries";
import { createReport, deleteReport, updateReport } from "@/graphql/mutations";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import client from "@/lib/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { uploadPatientReports } from "@/lib/storage";
interface Report {
  id: string;
  fileUrl: string;
  fileName: string;
  fileType: string;
  createdAt: string;
}

const UserReports = () => {
  const { user } = useAuth();
  const userID = user?.id;
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [editingReportId, setEditingReportId] = useState<string | null>(null);
  const [editedFileName, setEditedFileName] = useState<string>("");
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [renameLoadingId, setRenameLoadingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response: any = await client.graphql({
          query: reportsByUserID,
          variables: { userID },
        });
        setReports(response.data.reportsByUserID.items || []);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [userID]);

  // Open Delete Confirmation Dialog
  const confirmDelete = (reportId: string) => {
    setSelectedReportId(reportId);
    setDeleteModalOpen(true);
  };

  // Delete Report
  const handleDelete = async () => {
    if (!selectedReportId) return;

    try {
      await client.graphql({
        query: deleteReport,
        variables: { input: { id: selectedReportId } },
      });

      // Remove deleted report from state
      setReports((prevReports) =>
        prevReports.filter((r) => r.id !== selectedReportId)
      );
      toast.success("Report deleted successfully!");
    } catch (error) {
      console.error("Error deleting report:", error);
      toast.error("Failed to delete report. Please try again.");
    } finally {
      setDeleteModalOpen(false);
      setSelectedReportId(null);
    }
  };

  if (loading) return <p>Loading reports...</p>;

  const handleUpload = async () => {
    if (!selectedFile || !userID) return;

    try {
      const fileUrl = await uploadPatientReports(selectedFile, user?.id);
      const fileName = selectedFile.name;
      const fileType = selectedFile.type;

      await client.graphql({
        query: createReport,
        variables: {
          input: {
            fileUrl,
            fileName,
            fileType,
            userID,
          },
        },
      });

      toast.success("Report uploaded successfully!");
      setUploadModalOpen(false);
      setSelectedFile(null);

      // Refresh the report list
      const response: any = await client.graphql({
        query: reportsByUserID,
        variables: { userID },
      });
      setReports(response.data.reportsByUserID.items || []);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload report.");
    }
  };

  const handleRename = async (reportId: string) => {
    if (!editedFileName.trim()) {
      toast.error("File name cannot be empty.");
      return;
    }

    if (
      reports.find((r) => r.id === reportId)?.fileName === editedFileName.trim()
    ) {
      setEditingReportId(null); // No change
      return;
    }

    try {
      setRenameLoadingId(reportId);
      await client.graphql({
        query: updateReport,
        variables: {
          input: {
            id: reportId,
            fileName: editedFileName.trim(),
          },
        },
      });

      // Optimistically update state
      setReports((prev) =>
        prev.map((report) =>
          report.id === reportId
            ? { ...report, fileName: editedFileName.trim() }
            : report
        )
      );

      toast.success("Report name updated!");
    } catch (error) {
      console.error("Rename failed:", error);
      toast.error("Failed to rename report.");
    } finally {
      setRenameLoadingId(null);
      setEditingReportId(null);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="flex justify-end  mb-4 mt-4">
          <Button
            variant="outline"
            className="text-secondary border-sky-400 hover:bg-sky-50"
            onClick={() => setUploadModalOpen(true)}
          >
            <Plus className="mr-1 h-4 w-4" /> Upload Report
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Uploaded On</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.length > 0 ? (
              reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell
                    onClick={() => {
                      if (!renameLoadingId) {
                        setEditingReportId(report.id);
                        setEditedFileName(report.fileName);
                      }
                    }}
                  >
                    {editingReportId === report.id ? (
                      <input
                        autoFocus
                        type="text"
                        value={editedFileName}
                        onChange={(e) => setEditedFileName(e.target.value)}
                        onBlur={() => handleRename(report.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") e.currentTarget.blur();
                          if (e.key === "Escape") setEditingReportId(null);
                        }}
                        className="w-full border px-2 py-1 rounded text-sm"
                      />
                    ) : renameLoadingId === report.id ? (
                      <Loader2 className="animate-spin text-muted-foreground w-4 h-4" />
                    ) : (
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        {report.fileName}
                      </span>
                    )}
                  </TableCell>

                  <TableCell>{report.fileType}</TableCell>
                  <TableCell>
                    {new Date(report.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button asChild className=" bg-secondary hover:bg-sky-400">
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Report
                      </a>
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => confirmDelete(report.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No reports found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>

      {/* Reusable Delete Confirmation Modal */}
      <DeleteConfirmationDialog
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
      {/* Upload Modal */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Report</DialogTitle>
          </DialogHeader>
          <Input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          />
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setUploadModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleUpload}
              className="bg-primary hover:bg-secondary text-white"
              disabled={!selectedFile}
            >
              Upload
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UserReports;
