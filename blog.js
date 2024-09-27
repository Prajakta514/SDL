document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("themeButton");
    const nextButton = document.getElementById("nextButton");
    const themeSection = document.getElementById("themeSection");
    const editorSection = document.getElementById("editorSection");
    const editor = document.getElementById("editor");
    const boldButton = document.getElementById("boldButton");
    const italicButton = document.getElementById("italicButton");
    const underlineButton = document.getElementById("underlineButton");
    const colorPicker = document.getElementById("colorPicker");
    const blogTitleInput = document.getElementById("blogTitle");
    const publishButton = document.getElementById("publishButton");
    const blogFormContainer = document.getElementById("blogFormContainer");
    const editorTitle = document.getElementById("editorTitle");
    const blogFileInput = document.getElementById("blogFile");

    let selectedTheme = "";

    themeButton.addEventListener("click", function() {
        themeSection.style.display = "block";
        editorSection.style.display = "none"; // Hide editor when switching to theme selection
    });

    nextButton.addEventListener("click", function() {
        const selectedThemePhoto = document.querySelector(".theme-photo.selected");
        if (selectedThemePhoto) {
            selectedTheme = selectedThemePhoto.src;
            editorSection.style.display = "block";
            themeSection.style.display = "none"; // Hide theme selection when switching to editor
            editor.style.backgroundImage = `url(${selectedTheme})`;
            editor.style.position = "relative";
            const blogTitle = blogTitleInput.value;
            editorTitle.textContent = blogTitle; // Display title in editor window
            blogFormContainer.style.display = "none"; // Hide the blog form
        } else {
            alert("Please choose a theme.");
        }
    });

    document.querySelectorAll(".theme-photo").forEach(function(photo) {
        photo.addEventListener("click", function() {
            document.querySelectorAll(".theme-photo").forEach(function(item) {
                item.classList.remove("selected");
            });
            photo.classList.add("selected");
        });
    });

    boldButton.addEventListener("click", function() {
        document.execCommand("bold", false, null);
    });

    italicButton.addEventListener("click", function() {
        document.execCommand("italic", false, null);
    });

    underlineButton.addEventListener("click", function() {
        document.execCommand("underline", false, null);
    });

    colorPicker.addEventListener("input", function() {
        document.execCommand("foreColor", false, this.value);
    });



// Handle file selection

blogFileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileContent = event.target.result;
            // Create a new div element to hold the file content
            const fileDiv = document.createElement('div');
            // Set the innerHTML of the new div to the file content
            fileDiv.innerHTML = fileContent;
            // Insert the new div into the editor
            editor.appendChild(fileDiv);
        };
        // Read the file as text
        reader.readAsText(file);
    }
});



    publishButton.addEventListener("click", function() {
        const blogTitle = blogTitleInput.value;
        const blogContent = editor.innerHTML;
        const blogCategory = document.getElementById("blogCategory").value;

        console.log("Title:", blogTitle);
        console.log("Content:", blogContent);
        console.log("Theme:", selectedTheme);
        console.log("Category:", blogCategory); // Log the selected category to the console

        if (blogTitle && blogContent && selectedTheme && blogCategory) {
            const formData = new FormData();
            formData.append('title', blogTitle);
            formData.append('category', blogCategory);
            formData.append('theme', selectedTheme);
            formData.append('content', blogContent);

            fetch('save_blog.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    return response.text(); 
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } else {
            alert("Please fill in all fields before publishing the blog.");
        }
    });
});









// document.addEventListener("DOMContentLoaded", function() {
//     const themeButton = document.getElementById("themeButton");
//     const nextButton = document.getElementById("nextButton");
//     const themeSection = document.getElementById("themeSection");
//     const editorSection = document.getElementById("editorSection");
//     const editor = document.getElementById("editor");
//     const boldButton = document.getElementById("boldButton");
//     const italicButton = document.getElementById("italicButton");
//     const underlineButton = document.getElementById("underlineButton");
//     const colorPicker = document.getElementById("colorPicker");
//     const blogTitleInput = document.getElementById("blogTitle");
//     const publishButton = document.getElementById("publishButton");
//     const blogFormContainer = document.getElementById("blogFormContainer");
//     const editorTitle = document.getElementById("editorTitle");
//     const blogFileInput = document.getElementById("blogFile");

//     let selectedTheme = "";

//     themeButton.addEventListener("click", function() {
//         themeSection.style.display = "block";
//         editorSection.style.display = "none"; // Hide editor when switching to theme selection
//     });

//     nextButton.addEventListener("click", function() {
//         const selectedThemePhoto = document.querySelector(".theme-photo.selected");
//         if (selectedThemePhoto) {
//             selectedTheme = selectedThemePhoto.src;
//             editorSection.style.display = "block";
//             themeSection.style.display = "none"; // Hide theme selection when switching to editor
//             editor.style.backgroundImage = `url(${selectedTheme})`; // Set background image of editor
//             editor.style.position = "relative";
//             const blogTitle = blogTitleInput.value;
//             // editorTitle.textContent = blogTitle; 
//             blogFormContainer.style.display = "none"; // Hide the blog form
//         } else {
//             alert("Please choose a theme.");
//         }
//     });

//     boldButton.addEventListener("click", function() {
//         document.execCommand("bold", false, null);
//     });

//     italicButton.addEventListener("click", function() {
//         document.execCommand("italic", false, null);
//     });

//     underlineButton.addEventListener("click", function() {
//         document.execCommand("underline", false, null);
//     });

//     colorPicker.addEventListener("input", function() {
//         document.execCommand("foreColor", false, this.value);
//     });

//     // Handle file selection
//     blogFileInput.addEventListener("change", function() {
//         const file = this.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(event) {
//                 const fileContent = event.target.result;
//                 // Create a new div element to hold the file content
//                 const fileDiv = document.createElement('div');
//                 // Set the innerHTML of the new div to the file content
//                 fileDiv.innerHTML = fileContent;
//                 // Insert the new div into the editor
//                 editor.appendChild(fileDiv);
//             };
//             // Read the file as text
//             reader.readAsText(file);
//         }
//     });

//     publishButton.addEventListener("click", function() {
//         const blogTitle = blogTitleInput.value;
//         const blogContent = editor.innerHTML;
//         const blogCategory = document.getElementById("blogCategory").value;

//         console.log("Title:", blogTitle);
//         console.log("Content:", blogContent);
//         console.log("Theme:", selectedTheme);
//         console.log("Category:", blogCategory); // Log the selected category to the console

//         if (blogTitle && blogContent && selectedTheme && blogCategory) {
//             const formData = new FormData();
//             formData.append('title', blogTitle);
//             formData.append('category', blogCategory);
//             formData.append('theme', selectedTheme);
//             formData.append('content', blogContent);

//             fetch('save_blog.php', {
//                 method: 'POST',
//                 body: formData
//             })
//             .then(response => {
//                 if (response.ok) {
//                     return response.text(); 
//                 }
//                 throw new Error('Network response was not ok.');
//             })
//             .then(data => {
//                 alert(data);
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//         } else {
//             alert("Please fill in all fields before publishing the blog.");
//         }
//     });
// });
