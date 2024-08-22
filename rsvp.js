document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://api.apispreadsheets.com/data/xkiH2LL1MAl3WZMy/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: data}),
        });

        if (response.ok) {
            alert('Thank you for your RSVP!');
            event.target.reset();
        } else {
            alert('There was an error submitting your RSVP. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your RSVP. Please try again.');
    }
}