import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/cupertino-ui/table";

const files = [
  { name: "Design.sketch", kind: "Sketch Document", size: "24.1 MB", modified: "Today, 09:42" },
  { name: "Notes.md", kind: "Markdown", size: "4 KB", modified: "Yesterday" },
  { name: "Mockups", kind: "Folder", size: "—", modified: "Jul 12" },
  { name: "Budget.numbers", kind: "Numbers", size: "1.2 MB", modified: "Jul 8" },
];

export default function TableDemo() {
  return (
    <div className="w-full max-w-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Kind</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Date Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((f, i) => (
            <TableRow key={f.name} data-state={i === 0 ? "selected" : undefined}>
              <TableCell className="font-medium">{f.name}</TableCell>
              <TableCell>{f.kind}</TableCell>
              <TableCell>{f.size}</TableCell>
              <TableCell>{f.modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
