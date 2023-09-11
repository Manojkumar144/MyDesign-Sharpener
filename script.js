
    document.getElementById('submitBtn').addEventListener('click', function() {
        $('#myModal').modal('hide'); 
    });
    
        document.getElementById('myForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Access the form elements and their values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
    
            // Log the form data to the console
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Date:', date);
            console.log('Time:', time);
        });
