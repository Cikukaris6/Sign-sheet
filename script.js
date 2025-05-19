// Select all the slide dots
const dots = document.querySelectorAll('.dot');
let activeIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Remove 'active' from all dots
    dots.forEach(d => d.classList.remove('active'));

    // Add 'active' to clicked dot
    dot.classList.add('active');

    // Simulate card change (you can extend this to actually show different content)
    activeIndex = index;
    console.log(`Switched to slide ${index + 1}`);
    
    // Optional: Add animation or update card content here
  });
});
