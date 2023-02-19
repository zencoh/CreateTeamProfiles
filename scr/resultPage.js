function resultPage(box) {
    return `
       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta http-equiv="X-UA-Compatible" content="ie=edge" />
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
           <title>My Team</title>
         </head>
       
         <body>
           <header>
             <nav class="navbar navbar-expand-lg navbar-light bg-custom">
               <div class="container-fluid">
                 <h1 class="mx-auto display-4">My Team</h1>
               </div>
             </nav>
            </header>
            <div class="container-fluid mx-auto">
                <div class="row employeeRow"> 
                    ${box} 
                </div>
            </div>
          <script src="index.js"></script>
         </body>
        </html>
       `;
  }
  
  module.exports = resultPage;