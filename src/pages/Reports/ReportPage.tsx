import { useEffect, useState } from "react";
import { reportsByUserID } from "@/graphql/queries";
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

  if (loading) return <p>Loading reports...</p>;

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">User Reports</h2>
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
                  <TableCell>
                    <Button asChild>
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Report
                      </a>
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
    </Card>
  );
};

export default UserReports;
