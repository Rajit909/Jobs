import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

let appliedJob = [1, 2,]

const AppliedJobTable = () => {
  return (
    <>
      <section>
        <Table>
          <TableCaption>Your Applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
                appliedJob.map((item, index)=>
                    <TableRow key={index}>
                            <TableCell>17-07-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className='text-right'>
                                <Badge>Selected</Badge>
                            </TableCell>
                    </TableRow>
                )
            }
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default AppliedJobTable;
