// import React, { useState } from 'react';

// const UserForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [image, setImage] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const selectedImage = event.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowDetails(true);
//   };

//   const handlePrint = () => {
//     const printWindow = window.open('', '_blank');
//     printWindow.document.open();
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>User Details</title>
//         </head>
//         <body>
//           <h2>User Details</h2>
//           <p>First Name: ${firstName}</p>
//           <p>Last Name: ${lastName}</p>
//           <img src="${URL.createObjectURL(image)}" alt="${firstName} ${lastName}" />
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* ...form fields */}
//         <button type="submit">Submit</button>
//       </form>
//       {showDetails && (
//         <div>
//           <h2>User Details</h2>
//           {/* ...displayed details */}
//           <button onClick={handlePrint}>Print Details</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserForm;
