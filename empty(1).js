// Wait for the page to load completely 
document.addEventListener('DOMContentLoaded', function() { 
     
    // Theme Toggle Functionality 
    const themeToggle = document.getElementById('themeToggle'); 
    const body = document.body; 
     
    themeToggle.addEventListener('click', function() { 
        body.classList.toggle('dark-mode'); 
         
        // Change the button icon based on theme 
        if (body.classList.contains('dark-mode')) { 
            themeToggle.textContent = '  '; // Sun icon for light mode 
        } else { 
            themeToggle.textContent = '  '; // Moon icon for dark mode 
        } 
    }); 
     
    // Comment System 
    const commentForm = document.getElementById('commentForm'); 
    const commentsList = document.getElementById('commentsList'); 
     
    commentForm.addEventListener('submit', function(e) { 
        e.preventDefault(); // Prevent form from refreshing the page 
         
        // Get user input values 
        const username = document.getElementById('username').value; 
        const userComment = document.getElementById('usercomment').value; 
         
        // Check if both fields are filled 
        if (username.trim() === '' || userComment.trim() === '') { 
            alert('Please fill in both name and comment fields!'); 
            return; 
        } 
         
        // Create a new comment element 
        const commentDiv = document.createElement('div'); 
        commentDiv.style.marginBottom = '1rem'; 
        commentDiv.style.padding = '0.5rem'; 
        commentDiv.style.borderLeft = '3px solid #b0c812'; 
        commentDiv.style.backgroundColor = body.classList.contains('dark-mode') ? '#444' : '#f9f9f9'; 
         
        // Add the comment content 
        commentDiv.innerHTML = ` 
            <strong>${username}:</strong> 
            <p>${userComment}</p> 
            <small>Posted just now</small> 
        `; 
         
        // Add the new comment to the top of the comments list 
        commentsList.insertBefore(commentDiv, commentsList.firstChild); 
         
        // Clear the form 
        commentForm.reset(); 
         
        // Show success message 
        alert('Comment posted successfully!'); 
    }); 
}); 
 
// Poll Functionality (Global function as referenced in HTML onclick) 
function submitPoll(pollId) { 
    const form = document.getElementById(pollId); 
    const selectedOption = form.querySelector('input[type="radio"]:checked'); 
     
    if (!selectedOption) { 
        alert('Please select an option before voting!'); 
        return; 
    } 
     
    const selectedValue = selectedOption.value; 
    let resultElement; 
     
    // Determine which poll result to update 
    if (pollId === 'shojoPoll') { 
        resultElement = document.getElementById('shojoPollResult'); 
    } else if (pollId === 'shonenPoll') { 
        resultElement = document.getElementById('shonenPollResult'); 
    } else if (pollId === 'seinenPoll') { 
        resultElement = document.getElementById('seinenPollResult'); 
    } 
     
    // Display the result 
    if (resultElement) { 
        resultElement.innerHTML = `<strong>Thank you for voting! You selected: 
${selectedValue}</strong>`; 
        resultElement.style.color = '#b0c812'; 
        resultElement.style.marginTop = '0.5rem'; 
    } 
     
    // Disable the form to prevent multiple votes 
    const radioButtons = form.querySelectorAll('input[type="radio"]'); 
    const submitButton = form.querySelector('button'); 
     
    radioButtons.forEach(radio => radio.disabled = true); 
    submitButton.disabled = true; 
    submitButton.textContent = 'Vote Submitted'; 
    submitButton.style.backgroundColor = '#888'; 
     
    alert(`Your vote for ${selectedValue} has been recorded!`); 
} 
 
// Smooth scrolling for navigation links 
document.addEventListener('DOMContentLoaded', function() { 
    const navLinks = document.querySelectorAll('.nav-links a'); 
     
    navLinks.forEach(link => { 
        link.addEventListener('click', function(e) { 
            e.preventDefault(); 
             
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId); 
             
            if (targetSection) { 
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            } 
        }); 
    }); 
}); 