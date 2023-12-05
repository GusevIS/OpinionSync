import React from "react";
import ResultsTable from "./tables/resultsTable";
import ResultsUserList from "./lists/resultsUserList";
import ShareLink from "../UI/shareLink";



const Results = () => {

    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="font-h2">
                Název místnosti
            </h2>
            <ResultsTable>

            </ResultsTable>
            <div><p style={{ color: '#0A2440', fontFamily: 'Sen, sans-serif', fontWeight: 'bold', fontSize: '18px'}}>Vyberte uživatele pro porovnání odpovědí</p>
                <ResultsUserList>

                </ResultsUserList>
                <ShareLink />
            </div>


        </div>
    );
};

export default Results;