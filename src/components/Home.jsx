import React from 'react'

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <p className="lead text-center fs-4 mb-1 
                        text-white">
                welcome to
              </p>
              <h1 className="display-4 fw-bolder mb-2 text-center
                        text-white">Bitloanscapital
              </h1>
              <h2 className="display-6 fw-bolder mb-4 text-center
                        text-white">Unlock the Potential of Bitcoin Lending.
              </h2>
              <p className="lead text-center fs-4 mb-5 
                        text-white">
                Welcome to BitloansCapital, your trusted lending platform for secure and efficient borrowing solutions. With our diverse loan categories, competitive interest rates, and dedicated customer support, we are here to help you achieve your financial goals with ease
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={() => { window.location.href = '/contact'; }}>
                  Contact Us
                </button>
                <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => { window.location.href = '/about'; }}>
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to right, #fbfbfb, #ededed)',
          height: 'max(30vh, 10rem) 15rem',
          width: '100%',
          padding: 'max(3vh, 1rem) 1.5rem',
          boxSizing: 'border-box',
          fontFamily: 'Garamond, serif',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '0.1vw solid black',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              marginBottom: '1vh', // 1% of the viewport height
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            About
          </div>
          <div
            style={{
              fontSize: '3vw', // 4% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            3500 BTC
          </div>
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'normal',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            paid out to lenders
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '0.1vw solid black', // 0.1% of the viewport width
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              marginBottom: '1vh', // 1% of the viewport height
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            About
          </div>
          <div
            style={{
              fontSize: '3vw', // 4% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            $600 million
          </div>
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'normal',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            handled
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              marginBottom: '1vh', // 1% of the viewport height
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            About
          </div>
          <div
            style={{
              fontSize: '3vw', // 4% of the viewport width
              fontWeight: 'bold',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            $4 million
          </div>
          <div
            style={{
              fontSize: '1.2vw', // 1.5% of the viewport width
              fontWeight: 'normal',
              color: '#07425b',
              letterSpacing: '0.15vh', // 0.15% of the viewport height
            }}
          >
            loaned a day
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontFamily: 'Garamond, serif', color: '#07425b', padding: '3vw', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5vw', marginBottom: '0.5vw' }}>Investment rates as high as</h2>
          <span style={{ fontSize: '18vw', lineHeight: 1, letterSpacing: '1vw' }}>14</span>
          <span style={{ fontSize: '4vw', letterSpacing: '0.5vw' }}>%</span>
          <span style={{ fontSize: '1.5vw', lineHeight: 1, letterSpacing: '0.25vw' }}>P.A</span>
        </div>
        <div style={{ flex: 1, paddingLeft: '2vw' }}>
          <ul style={{ fontSize: '1.3vw', lineHeight: 1.5 }}>
            <li style={{ marginBottom: '1vw' }}>High Returns: Earn up to 14% p.a. on your investments, providing you with attractive and competitive returns.</li>
            <li style={{ marginBottom: '1vw' }}>Security: Our platform prioritizes the security of your investments, implementing robust measures to safeguard your funds and personal information.</li>
            <li style={{ marginBottom: '1vw' }}>Privacy: We ensure the privacy of your data, employing advanced encryption protocols and strict confidentiality practices to protect your sensitive information.</li>
            <li style={{ marginBottom: '1vw' }}>Customer Service and User-Friendliness: Experience dedicated customer support and a user-friendly interface, making your lending journey seamless and hassle-free.</li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontFamily: 'Garamond, serif', color: '#07425b', padding: '1.5vw 3vw' }}>
        <div style={{ flex: 1, paddingRight: '1.5vw' }}>
          <ul style={{ fontSize: '1.3vw', lineHeight: 1.5, marginBottom: '1vw', paddingLeft: '1vw', listStyleType: 'disc' }}>
            <li>Flexible Loan Categories: Choose from a diverse range of loan categories tailored to meet your specific financial needs, including student loans, medical loans, mortgage loans, and standard loans.</li>
            <li>Streamlined Application Process: Enjoy a straightforward and hassle-free borrowing experience with our user-friendly application process, allowing you to submit your loan application quickly and easily.</li>
            <li>Competitive Interest Rates: Benefit from competitive interest rates tailored to each loan category, ensuring you can access funding at affordable rates.</li>
            <li>Dedicated Customer Support: Receive personalized assistance throughout your borrowing journey from our experienced customer support team, who are available to address any questions or concerns you may have.</li>
          </ul>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5vw', marginBottom: '0.5vw' }}>Loan rates from as low as</h2>
          <span style={{ fontSize: '20vw', lineHeight: 1, letterSpacing: '1vw' }}>5</span>
          <span style={{ fontSize: '3vw', letterSpacing: '0.5vw' }}>%</span>
          <span style={{ fontSize: '1vw', lineHeight: 1, letterSpacing: '0.1vw' }}>P.A</span>
        </div>
      </div>
      {/* Services */}

      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services </h3>
              <h1 className="display-6 text-center mb-4">Why Choose Bitloanscapital?</h1>
              <hr className="w-25 mx-auto" />
              <h3 className="display-8 text-center mb-4">At Bitloanscapital, we are dedicated to revolutionizing the lending industry
                by harnessing the power of Bitcoin. Founded in 2019 by industry leaders and
                backed by years of experience, our platform is designed to provide a seamless
                and secure lending experience for both lenders and borrowers. Welcome and experience:</h3>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-money fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Industry-Leading Returns
                  </h5>
                  <p className="card-text lead">As a lender, you can enjoy attractive returns on your
                    Bitcoin investment. Our interest rates are above 15%, allowing us to offer you
                    competitive returns of 14% per annum. We strive to provide industry-leading returns
                    while prioritizing the profitability of our lenders.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-list-alt fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Flexible Terms and Conditions
                  </h5>
                  <p className="card-text lead">Unlike automated crypto lending platforms, our terms and
                    conditions are set by the company and frequently updated based on community feedback.
                    This flexibility allows us to adapt and meet the evolving needs of our clients. We take
                    community response seriously and value the input of our users.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-user-secret fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Privacy and Security
                  </h5>
                  <p className="card-text lead">We prioritize the privacy and security of our clients. Our platform operates
                    fully online, and user data is highly encrypted to provide the highest level of privacy. Our anonymous
                    wallet system ensures that your transactions remain private and secure. Additionally, we operate out of
                    a tax haven jurisdiction, further enhancing privacy and minimizing regulatory obligations.
                  </p>

                </div>
              </div>
            </div>

          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-globe fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Global Accessibility
                  </h5>
                  <p className="card-text lead">Bitloanscapital operates fully online, eliminating the need for physical
                    operations. This allows us to serve clients globally, providing access to our services from anywhere
                    in the world. Wherever you are in the world, you can participate in the future of decentralized
                    finance.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-shield fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Secure and User-Friendly Platform
                  </h5>
                  <p className="card-text lead">Our user-friendly platform makes the loan application process
                    simple and hassle-free. With just a few clicks, you can create an account, deposit your
                    Bitcoin, and choose whether to lend or borrow. Our secure Bitcoin wallet ensures that your
                    funds are protected, and our platform operates fully online, providing convenience and accessibility.
                  </p>

                </div>
              </div>
            </div>



          </div>

        </div>
      </section>

      {/* Loan Categories */}
      <section id="loan">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">Our Loan Categories</h1>

              <hr className="w-25 mx-auto" />
              <h3 className="display-8 text-center mb-4">We offer a range of loan categories to suit different
                financial needs. Whether you're a student looking for educational financing, a medical professional
                in need of funding, or a homeowner seeking a mortgage, we have tailored loan options for you. Our loan
                categories include:</h3>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-money fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Medical Loans
                  </h5>
                  <p className="card-text lead">Financial assistance for medical treatments, procedures, or healthcare-related expenses.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-dollar fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Student Loans
                  </h5>
                  <p className="card-text lead">Funding for educational expenses to support your academic journey.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-btc fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Mortgage Loans
                  </h5>
                  <p className="card-text lead">Loans specifically designed for homebuyers or homeowners looking to refinance.
                  </p>

                </div>
              </div>
            </div>

          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-bank fa-4x mb-4" style={{ color: '#07425b' }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Standard Loans
                  </h5>
                  <p className="card-text lead">General-purpose loans for various personal or business needs.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section style={{
        backgroundImage: 'url(/assets/Community.jpg)', backgroundRepeat: "no-repeat", backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }} id="join">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4 text-white">Join the Bitloanscapital Community</h1>

              <hr className="w-25 mx-auto" />
              <h3 className="display-8 text-center mb-4 text-white">Bitloanscapital is more than just a lending platform.
                it is a thriving community of like-minded individuals who believe in the power of Bitcoin and decentralized
                finance. We encourage active participation and value community feedback. Together, we can shape the future of
                lending and redefine opportunities for financial growth.
                Ready to get started? Create an account today and experience the seamless and profitable world of Bitloanscapital.
              </h3>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-white" style={{ borderColor: "#07425b" }} onClick={() => { window.location.href = '/sign'; }}>
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
