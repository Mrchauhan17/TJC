import React from "react";
import "./login.css"

// error fqlblgb
export default function Home() {
  return (
    <div>
    <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square" style={{ "--i": 0 } as any}></div>
          <div className="square" style={{ "--i": 1 } as any}></div>
          <div className="square" style={{ "--i": 2 } as any}></div>
          <div className="square" style={{ "--i": 3 } as any}></div>
          <div className="square" style={{ "--i": 4 } as any}></div>
          <div className="container">

            <div className="form">
              <h2>Login Form</h2>
              <form id="form"action = "/dashboard">
                <div className="inputBox">
                  <input type="email" name="email" placeholder="Username" required />
                </div>
                <div className="inputBox">
                  <input type="password" name="password" placeholder="password" required/>
                </div>
                <div className="inputBox">
                  <input type="submit" name="submit"value="Login" />
                  
                </div>
                <p className="forget">
                  Forget Password ? <a href="#">Click Here</a>
                </p>
                <p className="forget">
                  Don't have an account ? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
    

  );
 
};



// import React from 'react';
// import { createCipheriv, randomBytes } from 'crypto'; // Import relevant functions from the 'crypto' module
// import "./login.css";

// export default function Home() {
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault(); // Prevent default form submission

//         // Get form data
//         const username = (document.getElementById('username') as HTMLInputElement).value;
//         const password = (document.getElementById('password') as HTMLInputElement).value;

//         // Generate a secure random key and IV
//         const key = randomBytes(32);
//         const iv = randomBytes(16);

//         // Encrypt form data
//         const cipher = createCipheriv('aes-256-cbc', key, iv);
//         let encryptedUsername = cipher.update(username, 'utf-8', 'hex');
//         encryptedUsername += cipher.final('hex');
//         let encryptedPassword = cipher.update(password, 'utf-8', 'hex');
//         encryptedPassword += cipher.final('hex');

//         // Set encrypted values to form fields
//         (document.getElementById('username') as HTMLInputElement).value = encryptedUsername;
//         (document.getElementById('password') as HTMLInputElement).value = encryptedPassword;

//         // Submit the form if 'form' element exists
//         const formElement = document.getElementById('form') as HTMLFormElement; // Type assertion
//         if (formElement) {
//             formElement.submit();
//         } else {
//             console.error("Form element not found!");
//         }
//     };

//     return (
//         <div>
//             <section>
//                 <div className="color"></div>
//                 <div className="color"></div>
//                 <div className="color"></div>
//                 <div className="box">
//                     <div className="square" style={{ "--i": 0 }}></div>
//                     <div className="square" style={{ "--i": 1 }}></div>
//                     <div className="square" style={{ "--i": 2 }}></div>
//                     <div className="square" style={{ "--i": 3 }}></div>
//                     <div className="square" style={{ "--i": 4 }}></div>
//                     <div className="container">
//                         <div className="form">
//                             <h2>Login Form</h2>
//                             <form id="form" onSubmit={handleSubmit} action="api/user" method="post">
//                                 <div className="inputBox">
//                                     <input type="text" id="username" name="username" placeholder="Username" required />
//                                 </div>
//                                 <div className="inputBox">
//                                     <input type="password" id="password" name="password" placeholder="Password" required />
//                                 </div>
//                                 <div className="inputBox">
//                                     <input type="submit" value="Login" />
//                                 </div>
//                                 <p className="forget">
//                                     Forget Password ? <a href="#">Click Here</a>
//                                 </p>
//                                 <p className="forget">
//                                     Don't have an account ? <a href="#">Sign up</a>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
