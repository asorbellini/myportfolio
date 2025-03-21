
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Flower from "../assets/icons/Flower.svg"
import Sun from "../assets/icons/Sun.svg"
import Autumn from "../assets/icons/Autumn.svg"
import Snow from "../assets/icons/Snow.svg"

// using Cursify
const IconflakeCursor = ({ element }) => {
    const {theme} = useContext(ThemeContext)
    const seasons = [
        {name: "leaf", icon: Autumn, theme: "autumn"},
        {name: "snow", icon: Snow , theme: "winter"},
        {name: "flower", icon: Flower, theme: "spring"},
        {name: "sun", icon: Sun, theme: "summer"}]
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const canvImages = useRef([]);
    const animationFrame = useRef(null);
    const [possibleEmoji, setPossibleEmoji] = useState([seasons[0].icon]);
    const prefersReducedMotion = useRef(null);

    useEffect(()=>{
        const selectedThemeIcon = seasons.find((season)=> season.theme === theme)
        if (selectedThemeIcon) {
            setPossibleEmoji([selectedThemeIcon.icon])
        }
    }, [theme])

    useEffect(() => {
        if (typeof window === 'undefined') return;
        prefersReducedMotion.current = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) return;

        const targetElement = element || document.body;
        canvas.style.position = element ? 'absolute' : 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = "80"
        targetElement.appendChild(canvas);
        canvasRef.current = canvas;

        const setCanvasSize = () => {
            canvas.width = element ? targetElement.clientWidth : window.innerWidth;
            canvas.height = element ? targetElement.clientHeight : window.innerHeight;
        };
        const createEmojiImages = () => {
            canvImages.current = []
            possibleEmoji.forEach((emojiPath) => {
                const img = new Image();
                img.src = emojiPath;
                img.onload = () => {
                    canvImages.current.push(img);
                };
            });
            };
            const addParticle = (x, y) => {
            if (canvImages.current.length === 0) return;
            const randomImage =
                canvImages.current[
                    Math.floor(Math.random() * canvImages.current.length)
                ];
            particles.current.push(new Particle(x, y, randomImage));
            };
            const onMouseMove = (e) => {
                const x = element
                    ? e.clientX - targetElement.getBoundingClientRect().left
                    : e.clientX;
                const y = element
                    ? e.clientY - targetElement.getBoundingClientRect().top
                    : e.clientY;
                addParticle(x, y);
            };
            const updateParticles = () => {
                if (!context || !canvas) return;
                context.clearRect(0, 0, canvas.width, canvas.height);
                particles.current.forEach((particle, index) => {
                    particle.update(context);
                    if (particle.lifeSpan < 0) {
                        particles.current.splice(index, 1);
                    }
                });
            };
            const animationLoop = () => {
                updateParticles();
                animationFrame.current = requestAnimationFrame(animationLoop);
            };

            const init = () => {
                setCanvasSize();
                createEmojiImages();
                targetElement.addEventListener('mousemove', onMouseMove);
                window.addEventListener('resize', setCanvasSize);
                animationLoop();
            };
            const destroy = () => {
            if (canvasRef.current) {
                canvasRef.current.remove();
            }
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            targetElement.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', setCanvasSize);
            };
            prefersReducedMotion.current.onchange = () => {
                if (prefersReducedMotion.current?.matches) {
                    destroy();
                } else {
                    init();
                }
            };
            init();
            return () => destroy();
        }, [element, possibleEmoji]);
    return null;
};

class Particle {
  position;
  velocity;
  lifeSpan;
  initialLifeSpan;
  canv;
  constructor(x, y, canvasItem) {
    this.position = { x, y };
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1 + Math.random(),
    };
    this.lifeSpan = Math.floor(Math.random() * 60 + 80);
    this.initialLifeSpan = this.lifeSpan;
    this.canv = canvasItem;
  }
  update(context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 300;
    const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
    context.save();
    context.translate(this.position.x, this.position.y);
    context.scale(scale, scale);
    context.drawImage(this.canv, -10, -10, 20, 20);
    context.restore();
  }
}

export default IconflakeCursor;
