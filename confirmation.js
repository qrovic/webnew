
function submitForm() {
    Swal.fire({
        title: "Registration Successful!",
        text: "You have successfully registered.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        customClass: {
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false 
    });
   
    return false;
}
const itemData = {
    name: "Bench Press",
    quantity: 6,
};
function openEditPopup() {
    Swal.fire({
        title: 'Edit Item',
        html: `
            <div class="edit-item">
                <div class="form-group">
                    <label for="itemName">Item Name:</label>
                    <input type="text" id="itemName" class="swal2-input" value="${itemData.name}" required>
                </div>
                <div class="form-group">
                    <label for="itemQuantity">Quantity:</label>
                    <input type="number" id="itemQuantity" class="swal2-input" value="${itemData.quantity}" required>
                </div>
            </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const editedName = document.getElementById('itemName').value;
            const editedQuantity = document.getElementById('itemQuantity').value;

            if (!editedName || !editedQuantity) {
                Swal.showValidationMessage('Please fill in all fields');
            }

            return { name: editedName, quantity: editedQuantity };
        },
        showConfirmButton: true,
        confirmButtonText: "Edit",
        customClass: {
            
            confirmButton: "custom-button-class"
        },
        buttonsStyling: false
    }).then((result) => {
        if (!result.dismiss) {
            // Handle the edited item data (result.value) here
            const editedItem = result.value;

            // Update the item data
            itemData.name = editedItem.name;
            itemData.quantity = editedItem.quantity;

            // Update the item display on the page or perform further actions
            updateItemDisplay();
        }
    });
}

// Function to update the item display on the page
function updateItemDisplay() {
    // Update the item name and quantity display on the page
    const itemNameElement = document.querySelector('.title h2');
    const itemQuantityElement = document.querySelector('.quantity p');

    itemNameElement.textContent = itemData.name;
    itemQuantityElement.textContent = `${itemData.quantity} pcs`;
}

// Event listener to open the edit popup when the item is clicked
const itemElement = document.querySelector('.item');
itemElement.addEventListener('click', openEditPopup);

function deleteMember(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2a7d7a',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:'Deleted!',
            text:'Your file has been deleted.',
            icon:'success',
            confirmButtonColor: '#2a7d7a'}
          )
        }
      })
}
function addItem(){
    
        Swal.fire({
            title: 'Add Item',
            html: `
                <input type="file" id="itemImageInput" accept="image/*">
                <div class="form-group">
                    <label for="itemName">Item Name:</label>
                    <input type="text" id="itemName" class="swal2-input" required>
                </div>
                <div class="form-group">
                    <label for="itemQuantity">Quantity:</label>
                    <input type="number" id="itemQuantity" class="swal2-input" required>
                </div>
            `,
            confirmButtonColor: '#2a7d7a',
            showCancelButton: true,
            confirmButtonText: 'Add',
            preConfirm: () => {
                const itemImageInput = document.getElementById('itemImageInput');
                const itemName = document.getElementById('itemName').value;
                const itemQuantity = document.getElementById('itemQuantity').value;

                if (!itemName || !itemQuantity) {
                    Swal.showValidationMessage('Please fill in all fields.');
                    return false;
                }

                // Get the selected image file
                const selectedImage = itemImageInput.files[0];

                // Handle the data (e.g., send it to a server or update the UI)
                console.log('Selected Image:', selectedImage);
                console.log('Item Name:', itemName);
                console.log('Quantity:', itemQuantity);

                return { itemName, itemQuantity, selectedImage };
            }
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title:'Item Added!',
                text:'An item has been added.',
                icon:'success',
                confirmButtonColor: '#2a7d7a'}
              )
            }
          });
}
function editMember(){
    const membershipData = {
        name: 'John Doe',
        age: 30,
        date: '2023-09-30',
        contact: '(123) 456-7890',
        email: 'john@example.com',
        address: '123 Main St, City',
    };

    Swal.fire({
        title: 'Edit Member',
        html: `
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" class="swal2-input" value="${membershipData.name}" required>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" class="swal2-input" value="${membershipData.age}" required>
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" class="swal2-input" value="${membershipData.date}" required>
            </div>
            <div class="form-group">
                <label for="contact">Contact:</label>
                <input type="text" id="contact" class="swal2-input" value="${membershipData.contact}" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="swal2-input" value="${membershipData.email}" required>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" class="swal2-input" value="${membershipData.address}" required>
            </div>
        `,
        confirmButtonColor: '#2a7d7a',
        showCancelButton: true,
        confirmButtonText: 'Save',
        preConfirm: () => {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const date = document.getElementById('date').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            return { name, age, date, contact, email, address };
        }
        
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:'Member Details Edited!',
            text:'A member details have been changed.',
            icon:'success',
            confirmButtonColor: '#2a7d7a'}
          )
        }
      });
    
}
function viewMember(){
    const membershipData = {
        name: 'John Doe',
        age: 30,
        date: '2023-09-30',
        contact: '(123) 456-7890',
        email: 'john@example.com',
        address: '123 Main St, City',
    };

    Swal.fire({
        title: 'View Member',
        html: `
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" class="swal2-input" value="${membershipData.name}" required readonly>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" class="swal2-input" value="${membershipData.age}" required readonly>
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" class="swal2-input" value="${membershipData.date}" required readonly>
            </div>
            <div class="form-group">
                <label for="contact">Contact:</label>
                <input type="text" id="contact" class="swal2-input" value="${membershipData.contact}" required readonly>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="swal2-input" value="${membershipData.email}" required readonly>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" class="swal2-input" value="${membershipData.address}" required readonly>
            </div>
        `,
        confirmButtonColor: '#2a7d7a',
        showCancelButton: false,
        confirmButtonText: 'Quit',
        preConfirm: () => {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const date = document.getElementById('date').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            return { name, age, date, contact, email, address };
        }
        
    })
}