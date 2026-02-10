import React from "react" ;

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"] ;
  const contractList = [
    "support@dreamfund.com",
    "info@example.com",
    "Contact Us",

  ];

  const usefullLink = ["Home", "About Us", "Company Bio"] ;
  return (
    <footer className ="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                DreamFund
              </h6>
              <p>
                Here you can use rows and colums to organize your footer content.
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Products
              </h6>
                {productList.map((el , i) => (
                  <p className="mb-4" key={i+1}>
                    <a href="#!">{el}</a>
                  </p>
                ))}
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                 Usefull links
              </h6>
              {usefullLink.map((el,i) => (
                <p className="mb-4" key={i+1}>
                  <a href="#!">{el}</a>
                </p>
              ))}

            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                   Start
              </h6>
              {contractList.map((el,i) => (
                <p className="mb-4" key={i+1}>
                  <a href="#!">{el}</a>
                </p>
              ))}
            </div>
        </div>      
        </div>
        <div className="backgroundMain p-6 text-center">
          <span>
            © 2026 copyright:
          </span>
          <a className="font-semibold" href="https://tailwind-elements.com/">
            DreamFund
          </a>
          
        </div>
    </footer>
  );
};

export default Footer ;