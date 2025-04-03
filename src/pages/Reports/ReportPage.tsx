import { useEffect, useState } from "react";
import { reportsByUserID } from "@/graphql/queries";
import { deleteReport } from "@/graphql/mutations";
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
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";

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
      setReports((prevReports) => prevReports.filter((r) => r.id !== selectedReportId));
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

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">My Reports</h2>
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
                  <TableCell>
                    <a
                      href={report.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {report.fileName}
                    </a>
                  </TableCell>
                  <TableCell>{report.fileType}</TableCell>
                  <TableCell>
                    {new Date(report.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button asChild className="hover:bg-secondary">
                      <a href={report.fileUrl} target="_blank" rel="noopener noreferrer">
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
    </Card>
  );
};

export default UserReports;
