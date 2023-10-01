
const faqItems = document.querySelectorAll('.faq-item');


faqItems.forEach((faqItem) => {
    const question = faqItem.querySelector('.question');
    const answer = faqItem.querySelector('.answer');

    question.addEventListener('click', function() {
       
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            
        } else {
            answer.style.display = 'block';
        }
    });
});
