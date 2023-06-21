import React from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function How() {
    return (
        <div>
            <MDBContainer>

                {/* General Questions */}
                <section>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">How It Works</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <p className="text-center mb-5">
                        Welcome to Bitloanscapital! We've made the lending and borrowing process simple and secure. Here's a step-by-step guide on how it works:
                    </p>

                    <MDBRow>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3" style={{ color: "#07425b" }}>
                            <MDBIcon icon="users" className="text-primary pe-2" style={{ color: "#07425b" }} /> 1. Account Creation
                            </MDBTypography>
                            <p>
                                •	Visit the Bitloanscapital website and click on the "Sign Up" button.
                                <br></br>•	Fill in the required information to create your account, including username, email address, and password.
                                <br></br>•	Agree to the Terms of Service and Privacy Policy.
                                <br></br>•	Complete the account verification process, if applicable, to unlock all features.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3 text-primary">
                                <MDBIcon fa icon="cc-visa text-primary pe-2" /> 2. Account Funding
                            </MDBTypography>
                            <p>
                                •	After creating your account, you will be assigned a Bitloanscapital wallet address.
                                <br></br>•	Deposit funds into your wallet by sending Bitcoin to the provided wallet address.
                                <br></br>•	Wait for the required confirmations for the deposit to be processed.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3 text-primary">
                                <MDBIcon fa icon="user-o text-primary pe-2" /> 3. Borrowing Process

                            </MDBTypography>
                            <p>
                                •	Once your account is funded, you can choose to borrow funds by providing collateral.
                                <br></br>•	Select the loan category that fits your needs, such as Student, Medical, Mortgage, or Standard loans.
                                <br></br>•	Review the loan amounts, interest rates, and collateral requirements for each loan category.
                                <br></br>•	Complete the Know Your Customer (KYC) process, if applicable, to verify your identity and eligibility as a borrower.
                                <br></br>•	Choose between a Normal Loan or an Emergency Loan. Note that for Normal Loans, the collateral needs to remain in your wallet for at least two months, whereas Emergency Loans are disbursed immediately.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3 text-primary">
                                <MDBIcon fa icon="thumbs-up text-primary pe-2" /> 4. Lending Process
                            </MDBTypography>
                            <p>
                                •	If you prefer to lend your funds and earn interest, select the lending option.
                                <br></br>•	Specify the amount you wish to lend from your Bitloanscapital wallet.
                                <br></br>•	Confirm your lending selection and proceed.
                                <br></br>•	Your funds will be added to the lending pool, contributing to the available funds for borrowers.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3 text-primary">
                                <MDBIcon fa icon="cc-paypal text-primary pe-2" /> 5. Deposit and Withdrawal
                            </MDBTypography>
                            <p>
                                •	Deposits: To add more funds to your Bitloanscapital wallet, simply send additional Bitcoin to your wallet address.
                                <br></br>•	Withdrawals: If you need to withdraw your funds, navigate to the withdrawal section in your account. You can initiate a
                                withdrawal request, and the funds will be sent to your designated Bitcoin address. Please note that withdrawal processing time
                                may vary depending on blockchain confirmations.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" lg="4" className="mb-4">
                            <MDBTypography tag="h6" className="mb-3 text-primary">
                                <MDBIcon fa icon="cc-paypal text-primary pe-2" /> 6. Repayment and Interest
                            </MDBTypography>
                            <p>
                                •	Borrowers are responsible for repaying their loans within the agreed-upon terms.
                                <br></br>•	Interest rates will be applied to the loan amount, and borrowers will be provided with a repayment schedule.
                                <br></br>•	Lenders will earn interest on their lent funds, and the interest will be disbursed according to the lending terms.
                            </p>
                        </MDBCol>
                        Please remember to carefully read and understand the terms and conditions, as well as any specific guidelines provided by Bitloanscapital, before engaging in any lending or borrowing activities. If you have any further questions, our customer support team is here to assist you.
                        <br></br>Disclaimer: The lending and borrowing activities involve financial risks. It is important to consider the risks and consult with financial professionals before making any investment decisions.

                    </MDBRow>
                </section>
            </MDBContainer>
        </div>
    )
}
