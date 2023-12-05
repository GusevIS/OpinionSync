import Card from "../UI/card";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TextField from '@mui/material/TextField';
import ContainedButton from "../Components/buttons/containedButton";
import BasicTextFields from "./textFields/outlinedTextField";




const Discussion = () => {
    return(
        <>
        <div className = "flex justify-between  flex-row">
            <h2 className="default-text">Question 1</h2>

            <div className= "">
                <AccessAlarmIcon fontSize="large" ></AccessAlarmIcon>
                <TextField type="text" label="" variant="outlined" defaultValue="10m:00s" style={{textAlign: 'center'}} InputProps={{
                    readOnly: true,
                }} />
            </div>
        </div>


        <Card>

            <Card>
                User 1
                        <BasicTextFields label="This is my opinion..." customWidth="416px" customHeight="58px">
                            {}
                        </BasicTextFields>
                <ContainedButton buttonText="Responde" to="/discussion" customWidth="130px" customHeight="38px">
                    {}
                </ContainedButton>
            </Card>

                <Card>
                    User 2
                    <BasicTextFields label="This is my opinion..." customWidth="416px" customHeight="58px">
                        {}
                    </BasicTextFields>
                        <ContainedButton buttonText="Responde" to="/discussion" customWidth="130px" customHeight="38px">
                            {}
                        </ContainedButton>
                </Card>

                <Card>
                    User 3
                    <BasicTextFields label="This is my opinion..." customWidth="416px" customHeight="58px">
                        {}
                    </BasicTextFields>
                    <ContainedButton buttonText="Responde" to="/discussion" customWidth="130px" customHeight="38px">
                        {}
                    </ContainedButton>
                </Card>
        </Card>
        </>
    );
};
export default Discussion;