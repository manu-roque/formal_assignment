import React, {useState, useRef} from 'react';

interface CarouselProps {
    children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isFocused, setIsFocused] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const currentX = e.clientX;
        const diffX = currentX - startX;
        setTranslateX(currentTranslate + diffX);
    }

    const handleMouseUp = () => {
        if (isDragging) return;
        setIsDragging(false);


        setTranslateX(0);
    }

    const handleMouseLeave = () => {
        if (!isDragging) return;

        setIsDragging(false);
        setCurrentTranslate(translateX);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isFocused) return;

        if (e.key === "ArrowLeft") {
            setTranslateX((prev) => prev + 100);
            setCurrentTranslate((prev) => prev + 100);
        } else if (e.key === 'ArrowKey') {
            setTranslateX((prev) => prev - 100);
            setCurrentIndex((prev) => prev - 100);
        }
    }

    

    return (
        <div
            ref={containerRef}
            style={{
                overflow: 'hidden',
                width: '97%',
                // margin: 'auto',
                userSelect: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    display: 'flex',
                    transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
                    gap: '20px'
                }}
            >
                {children.map((child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel