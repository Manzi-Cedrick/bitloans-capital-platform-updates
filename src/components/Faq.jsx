import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function StaticFaqSection() {
  return (
    <MDBContainer>

      {/* General Questions */}
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className="text-center mb-5">
          Welcome to
          the Bitloanscapital FAQs page. Here, we address the most common questions and
          concerns about our platform, lending process, and other important aspects. We
          strive to provide you with comprehensive and accurate information to help you
          make informed decisions. If you have any additional queries, feel free to reach
          out to our customer support team.

        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="btc text-primary pe-2" /> What is
              Bitloanscapital?

            </MDBTypography>
            <p>
              <strong>
                <u>Bitloanscapital</u>
              </strong>{" "}
              is a lending platform that allows individuals to lend their
              Bitcoin to borrowers in exchange for attractive returns. We provide a secure
              and transparent environment for lenders and borrowers to connect and meet their
              financial needs.

            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="registered text-primary pe-2" /> Is Bitloanscapital a
              regulated platform?

            </MDBTypography>
            <p>
              <strong>
                <u>No, for good reason!</u>
              </strong>{" "}
              Bitloanscapital operates in a currently unregulated space to prioritize privacy
              and provide our clients with the highest level of confidentiality. However, we
              adhere to applicable laws and regulations in the territories where our services
              are offered.

            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="user text-primary pe-2" /> How do I create an
              account?

            </MDBTypography>
            <p>
              Creating an
              account with Bitloanscapital is simple. Visit our website and click on the
              "Sign Up" button. Fill in the required information, complete the process, and you'll be ready to start lending or borrowing.

            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="user-secret text-primary pe-2" /> Is my personal
              information safe on the platform?

            </MDBTypography>
            <p>
              At
              Bitloanscapital, take privacy and security seriously. We employ advanced
              encryption and security measures to safeguard your personal information. We do
              not disclose client information unless required by law or with the client's
              consent.

            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="home text-primary pe-2" /> Can I participate in
              Bitloanscapital if I'm located outside the supported territories?

            </MDBTypography>
            <p>
              Bitloanscapital complies with the laws and regulations of the territories where
              our services are offered. It is essential to review the terms and conditions
              and ensure that you are eligible to participate based on your jurisdiction's
              laws.

            </p>
          </MDBCol>
        </MDBRow>
      </section>

      {/* Lending Questions */}

      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          Lending Questions
        </MDBTypography>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="handshake-o text-primary pe-2" /> How does lending
              work on Bitloanscapital?
            </MDBTypography>
            <p>
              <strong>
                <u>Lending</u>
              </strong>{" "}
              on
              Bitloanscapital involves simply depositing Bitcoin into your lending account. Your Bitcoin
              contributes to the lending pool, which is disbursed to borrowers. You earn
              interest on your lending account based on the loan terms and duration.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="maxcdn text-primary pe-2" /> What are the minimum
              and maximum lending amounts?
            </MDBTypography>
            <p>
              The minimum
              lending amount is $5,000, allowing lenders to participate in the lending
              program. There is no specific maximum lending amount, giving you the
              flexibility to lend based on your investment goals and available Bitcoin.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="star-half text-primary pe-2" /> How are interest
              rates determined?
            </MDBTypography>
            <p>
              Interest
              rates on Bitloanscapital are determined based on the loan categories, loan
              amounts, and market conditions. We strive to offer competitive rates that
              ensure profitability for lenders while providing attractive options for
              borrowers.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="money text-primary pe-2" /> How often are
              interest payments made?
            </MDBTypography>
            <p>
              Interest
              payments are made monthly.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="credit-card-alt text-primary pe-2" /> Can I withdraw my
              funds at any time?
            </MDBTypography>
            <p>
              Yes, you
              have the option to withdraw funds from your lending account at any time. However, it is important to note that early withdrawals may
              result in a forfeiture of some accrued interest. The specific terms and
              conditions related to early withdrawals will be outlined in the lending
              agreement.
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      {/* Borrowing Questions */}
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          Borrowing Questions
        </MDBTypography>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="bold text-primary pe-2" /> How does borrowing
              work on Bitloanscapital?
            </MDBTypography>
            <p>
              <strong>
                <u>Borrowers</u>
              </strong>{" "}
              can apply for loans on Bitloanscapital by completing the necessary documentation
              and undergoing a Know Your Customer (KYC) process. Once approved, borrowers
              receive funds from the lending pool and repay the loan according to the
              agreed-upon terms.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="calendar text-primary pe-2" /> What are the loan
              categories offered?
            </MDBTypography>
            <p>
              Bitloanscapital offers various loan categories, including Student, Medical,
              Mortgage, and Standard loans. Each category has specific loan amounts, interest
              rates, and collateral requirements tailored to meet the borrowing needs of
              different individuals.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="hourglass text-primary pe-2" /> What collateral is
              required for borrowing?
            </MDBTypography>
            <p>
              Collateral
              requirements vary based on the loan category and amount. Bitloanscapital uses
              collateral to secure the loans and ensure the safety of lenders' funds
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="credit-card text-primary pe-2" /> How long does it
              take to receive loan funds?
            </MDBTypography>
            <p>
              The time it
              takes to receive loan funds may vary depending on the loan application review
              and approval process. Once your loan is approved, the funds will be disbursed
              to your provided account within a reasonable timeframe.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="ban text-primary pe-2" /> Are there any
              prepayment penalties?
            </MDBTypography>
            <p style={{ textAlign: 'justify' }}>
              Bitloanscapital does not charge prepayment penalties. If you choose to repay
              your loan before the agreed-upon term, you can do so without incurring any
              additional fees or penalties.
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      {/* Account Management and Support Questions */}

      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          Account Management and Support Questions
        </MDBTypography>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="ticket text-primary pe-2" /> How can I contact Bitloanscapital for support?
            </MDBTypography>
            <p style={{ textAlign: 'justify' }}>
              For any inquiries or assistance, you can reach our customer support team via email at
              <strong>
                <u> support@bitloanscapital.com</u>
              </strong>{""} or
              through our support ticket system on the platform. We strive to provide timely
              and helpful responses to address your concerns.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="cogs text-primary pe-2" /> Can I change my
              lending or borrowing preferences after creating an account?
            </MDBTypography>
            <p>
              Yes, you can
              modify your lending or borrowing preferences after creating an account. Simply
              log in to your account, navigate to the settings or preferences section, and
              make the desired changes.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="unlock text-primary pe-2" /> What happens if I
              forget my account password?
            </MDBTypography>
            <p>
              If you
              forget your account password, you can initiate a password reset process by
              clicking on the "Forgot Password" link on the login page. Follow the
              instructions provided to reset your password and regain access to your account.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="book text-primary pe-2" /> How often are
              account statements provided?
            </MDBTypography>
            <p>
              Account statements
              are typically provided annually, allowing you to track your lending
              and borrowing activities.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fa icon="comments-o text-primary pe-2" /> What happens in the
              event of a dispute or issue with a loan?
            </MDBTypography>
            <p>
              In the event
              of a dispute or issue with a loan, we encourage lenders and borrowers to reach
              out to our customer support team for assistance. Our team will investigate the
              matter and work towards a fair resolution, per our
              policies and terms.
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      {/* More Questions */}

      <div className="page-container">
        <MDBCol lg="6" md="12" className="text-center">
          <p>
            <span class="fw-bold">
              Still have any questions? Contact us to get your answer!
            </span>
          </p>

          <form>
            <MDBInput placeholder="Email address" required className="mb-2" />
            <MDBTextArea rows={4} placeholder="Message" className="mb-2" />
            <MDBBtn block>Send</MDBBtn>
            <br></br>
            <br></br>
          </form>
        </MDBCol>
      </div>
      
    </MDBContainer>
  );
}