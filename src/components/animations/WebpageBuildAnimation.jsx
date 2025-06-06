import { useEffect, useRef } from 'react';
import styles from './TechIconsAnimation.module.css';

const WebpageBuildAnimation = () => {
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (animationRef.current) {
      const canvas = animationRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions
      const setCanvasDimensions = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      
      setCanvasDimensions();
      window.addEventListener('resize', setCanvasDimensions);
      
      // Colors from CSS variables
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
      const bgColor = '#111';
      
      // Animation elements - Only keep the elements up to footer
      const elements = [
        { type: 'navbar', progress: 0, complete: false, duration: 80 },
        { type: 'hero', progress: 0, complete: false, duration: 120 },
        { type: 'cards', progress: 0, complete: false, duration: 150 },
        { type: 'content', progress: 0, complete: false, duration: 100 },
        { type: 'footer', progress: 0, complete: false, duration: 60 }
      ];
      
      // Keep track of current element being animated
      let currentElementIndex = 0;
      let animationFrame = 0;
      let isAnimating = true;
      
      // Draw function for each element type
      const drawFunctions = {
        navbar: (progress, ctx, w, h) => {
          const navHeight = h * 0.12;
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, w * progress, navHeight);
          
          // Logo
          if (progress > 0.3) {
            const logoProgress = Math.min(1, (progress - 0.3) * 3);
            ctx.fillStyle = primaryColor;
            ctx.fillRect(w * 0.05, navHeight * 0.25, w * 0.15 * logoProgress, navHeight * 0.5);
          }
          
          // Menu items
          if (progress > 0.5) {
            const menuProgress = Math.min(1, (progress - 0.5) * 2);
            const menuItemWidth = w * 0.08;
            const menuItemHeight = navHeight * 0.4;
            const menuStartX = w * 0.6;
            
            for (let i = 0; i < 3; i++) {
              if (menuProgress > i * 0.3) {
                const itemProgress = Math.min(1, (menuProgress - i * 0.3) * 3);
                ctx.fillStyle = '#fff';
                ctx.fillRect(
                  menuStartX + i * menuItemWidth * 1.5, 
                  navHeight * 0.3, 
                  menuItemWidth * itemProgress, 
                  menuItemHeight
                );
              }
            }
          }
        },
        
        hero: (progress, ctx, w, h) => {
          const navHeight = h * 0.12;
          const heroHeight = h * 0.3;
          
          // Hero background
          ctx.fillStyle = '#222';
          ctx.fillRect(0, navHeight, w * progress, heroHeight);
          
          // Hero content
          if (progress > 0.4) {
            const contentProgress = Math.min(1, (progress - 0.4) * 2);
            
            // Heading
            ctx.fillStyle = '#fff';
            ctx.fillRect(w * 0.1, navHeight + heroHeight * 0.25, w * 0.4 * contentProgress, heroHeight * 0.15);
            
            // Subheading
            if (contentProgress > 0.6) {
              const subProgress = Math.min(1, (contentProgress - 0.6) * 2.5);
              ctx.fillStyle = '#aaa';
              ctx.fillRect(w * 0.1, navHeight + heroHeight * 0.45, w * 0.5 * subProgress, heroHeight * 0.1);
            }
            
            // Button
            if (contentProgress > 0.8) {
              const btnProgress = Math.min(1, (contentProgress - 0.8) * 5);
              ctx.fillStyle = primaryColor;
              ctx.fillRect(w * 0.1, navHeight + heroHeight * 0.65, w * 0.15 * btnProgress, heroHeight * 0.15);
            }
          }
        },
        
        cards: (progress, ctx, w, h) => {
          const navHeight = h * 0.12;
          const heroHeight = h * 0.3;
          const cardsY = navHeight + heroHeight;
          const cardsHeight = h * 0.25;
          
          // Cards section background
          ctx.fillStyle = '#1a1a1a';
          ctx.fillRect(0, cardsY, w, cardsHeight * progress);
          
          // Cards
          if (progress > 0.3) {
            const cardWidth = w * 0.22;
            const cardHeight = cardsHeight * 0.7;
            const cardY = cardsY + cardsHeight * 0.15;
            const cardSpacing = w * 0.04;
            const cardsStartX = (w - (cardWidth * 3 + cardSpacing * 2)) / 2;
            
            for (let i = 0; i < 3; i++) {
              const cardProgress = Math.min(1, (progress - 0.3 - i * 0.15) * 3);
              if (cardProgress > 0) {
                // Card background
                ctx.fillStyle = '#222';
                const cardX = cardsStartX + i * (cardWidth + cardSpacing);
                ctx.fillRect(cardX, cardY, cardWidth, cardHeight * cardProgress);
                
                // Card content (if card is mostly drawn)
                if (cardProgress > 0.8) {
                  const contentProgress = Math.min(1, (cardProgress - 0.8) * 5);
                  
                  // Card icon
                  ctx.fillStyle = primaryColor;
                  ctx.beginPath();
                  ctx.arc(
                    cardX + cardWidth / 2, 
                    cardY + cardHeight * 0.25, 
                    cardWidth * 0.1 * contentProgress, 
                    0, 
                    Math.PI * 2
                  );
                  ctx.fill();
                  
                  // Card title
                  ctx.fillStyle = '#fff';
                  ctx.fillRect(
                    cardX + cardWidth * 0.15, 
                    cardY + cardHeight * 0.45, 
                    cardWidth * 0.7 * contentProgress, 
                    cardHeight * 0.08
                  );
                  
                  // Card text
                  if (contentProgress > 0.7) {
                    const textProgress = Math.min(1, (contentProgress - 0.7) * 3);
                    ctx.fillStyle = '#aaa';
                    for (let j = 0; j < 3; j++) {
                      ctx.fillRect(
                        cardX + cardWidth * 0.15, 
                        cardY + cardHeight * (0.58 + j * 0.08), 
                        cardWidth * 0.7 * textProgress, 
                        cardHeight * 0.04
                      );
                    }
                  }
                }
              }
            }
          }
        },
        
        content: (progress, ctx, w, h) => {
          const navHeight = h * 0.12;
          const heroHeight = h * 0.3;
          const cardsHeight = h * 0.25;
          const contentY = navHeight + heroHeight + cardsHeight;
          const contentHeight = h * 0.23;
          
          // Content section background
          ctx.fillStyle = '#151515';
          ctx.fillRect(0, contentY, w * progress, contentHeight);
          
          if (progress > 0.3) {
            const innerProgress = Math.min(1, (progress - 0.3) * 1.5);
            
            // Image placeholder
            ctx.fillStyle = '#333';
            ctx.fillRect(w * 0.1, contentY + contentHeight * 0.15, w * 0.25 * innerProgress, contentHeight * 0.7);
            
            // Text columns
            if (innerProgress > 0.5) {
              const textProgress = Math.min(1, (innerProgress - 0.5) * 2);
              ctx.fillStyle = '#888';
              
              // Heading
              ctx.fillStyle = '#fff';
              ctx.fillRect(w * 0.45, contentY + contentHeight * 0.15, w * 0.45 * textProgress, contentHeight * 0.1);
              
              // Paragraph lines
              ctx.fillStyle = '#888';
              for (let i = 0; i < 4; i++) {
                if (textProgress > i * 0.2) {
                  const lineProgress = Math.min(1, (textProgress - i * 0.2) * 5);
                  ctx.fillRect(
                    w * 0.45, 
                    contentY + contentHeight * (0.3 + i * 0.1), 
                    w * 0.45 * lineProgress, 
                    contentHeight * 0.05
                  );
                }
              }
            }
          }
        },
        
        footer: (progress, ctx, w, h) => {
          const footerY = h * 0.9;
          const footerHeight = h * 0.1;
          
          // Footer background
          ctx.fillStyle = '#222';
          ctx.fillRect(0, footerY, w * progress, footerHeight);
          
          if (progress > 0.4) {
            const contentProgress = Math.min(1, (progress - 0.4) * 1.7);
            
            // Footer columns
            for (let i = 0; i < 3; i++) {
              if (contentProgress > i * 0.3) {
                const colProgress = Math.min(1, (contentProgress - i * 0.3) * 3);
                const colX = w * (0.1 + i * 0.3);
                
                // Column title
                ctx.fillStyle = '#fff';
                ctx.fillRect(colX, footerY + footerHeight * 0.2, w * 0.2 * colProgress, footerHeight * 0.15);
                
                // Column links
                if (colProgress > 0.7) {
                  const linksProgress = Math.min(1, (colProgress - 0.7) * 3);
                  ctx.fillStyle = '#888';
                  for (let j = 0; j < 2; j++) {
                    ctx.fillRect(
                      colX, 
                      footerY + footerHeight * (0.45 + j * 0.15), 
                      w * 0.15 * linksProgress, 
                      footerHeight * 0.08
                    );
                  }
                }
              }
            }
          }
        }
      };
      
      // Draw the entire webpage with current progress
      function drawWebpage() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw each element based on its current progress
        elements.forEach((element, index) => {
          if (element.progress > 0) {
            drawFunctions[element.type](
              element.progress, 
              ctx, 
              canvas.width, 
              canvas.height
            );
          }
        });
      }
      
      // Animation loop
      function animate() {
        if (!isAnimating) return;
        
        // Update current element's progress
        if (currentElementIndex < elements.length) {
          const element = elements[currentElementIndex];
          
          if (!element.complete) {
            element.progress += 1 / element.duration;
            
            if (element.progress >= 1) {
              element.progress = 1;
              element.complete = true;
              
              // Move to next element after a short pause
              setTimeout(() => {
                currentElementIndex++;
                
                // Restart animation when footer is complete
                if (currentElementIndex >= elements.length) {
                  // Reset animation
                  elements.forEach(e => {
                    e.progress = 0;
                    e.complete = false;
                  });
                  currentElementIndex = 0;
                }
              }, 200);
            }
          }
        }
        
        // Draw current state
        drawWebpage();
        
        // Continue animation
        animationFrame = requestAnimationFrame(animate);
      }
      
      // Start animation
      animate();
      
      return () => {
        isAnimating = false;
        cancelAnimationFrame(animationFrame);
        window.removeEventListener('resize', setCanvasDimensions);
      };
    }
  }, []);
  
  return (
    <div className={styles.animationContainer}>
      <canvas ref={animationRef} className={styles.animationCanvas}></canvas>
    </div>
  );
};

export default WebpageBuildAnimation; 