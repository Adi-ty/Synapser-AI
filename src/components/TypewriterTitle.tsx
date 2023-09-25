"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("Your Ultimate Note-Taking Evolution!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Effortless note-taking with the power of AI!")
                    .start();
            }}
        />
    );
};

export default TypewriterTitle;
