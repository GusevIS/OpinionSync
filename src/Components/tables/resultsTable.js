import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import RatingScale from "../Scale/ratingScale";

function createData(name, answer) {
  return { name, answer };
}

const rows = [
  createData("Tvrzení je pravdivé, pokud odpovídá realitě", 1),
  createData(
    "Všichni sdílíme stejnou realitu a interpretujeme ji pouze jinak",
    2
  ),
  createData("Pravda závisí na názorech a přesvědčení lidí", 1),
  createData("Lidé vytvářejí slova a definují jejich význam", 5),
  createData("Prohlášení je pravdivé, pokud všichni souhlasí", 4),
];

const StyledTable = styled(Table)({
  border: "none",

  backgroundColor: "#F8F7F3",
});

export default function ResultsTable() {
  return (
    <TableContainer>
      <StyledTable aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="flex flex-col"
            >
              <TableCell
                className="flex-1"
                style={{
                  color: "#0A2440",
                  fontFamily: "Sen, sans-serif",
                  fontSize: "18px",
                  maxWidth: "640px",
                  wordWrap: "break-word",
                  margin: "0 auto",
                }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <div className="">
                <TableCell
                  align="right"
                  style={{
                    color: "#28954E",
                    fontFamily: "Sen, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Agree
                </TableCell>
                <TableCell align="right">
                  <RatingScale maxRating={5} className="mx-2" />
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: "#EF7068",
                    fontFamily: "Sen, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Disagree
                </TableCell>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
