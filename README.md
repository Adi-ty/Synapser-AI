# Synapser-AI: AI-Powered Note Taking App

Synapser-AI is an innovative note-taking application that leverages the power of artificial intelligence to enhance your note-taking experience. With Synapser-AI, you can create and manage multiple notebooks, each of which is equipped with a dynamic thumbnail generated from the notebook's name using DALLE API. In addition, our application offers a stunning Markdown editor powered by TipTap, supporting all standard Markdown features and further enhanced by AI-driven autocompletion provided by OpenAI's API.

## Features

- **Notebook Management:** Organize your notes efficiently by creating multiple notebooks.

- **AI-Generated Thumbnails:** Each notebook is adorned with a beautiful and relevant thumbnail, automatically generated based on the notebook's name using OpenAI's API.

- **Markdown Editor:** Our Markdown editor, powered by Tip Tap, provides a seamless and visually appealing writing experience.

- **AI Autocompletion:** Enjoy AI-driven autocompletion suggestions to enhance your Markdown editing efficiency. OpenAI's API powers this feature.

## Getting Started

Follow these steps to get started with Synapser-AI:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/synapser-ai/synapser-ai.git
   ```
2. **Install Dependencies:**
   Navigate to the project directory and install the necessary dependencies.
   ```bash
   cd synapser-ai
    bun install
   ```
3. **Configuration:**
   You will need to set up an OpenAI API key. Create a .env file in the project's root directory and add your API key:

   Use .env.example as a template for your .env file.

4. **Start the Application:**
   Start the Synapser-AI app using the following command:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. **Access Synapser-AI:**
   Open your web browser and go to http://localhost:3000 to access Synapser-AI. You can now log in, create notebooks, and experience the AI-enhanced Markdown editor.

## API Integration

To use the OpenAI API for generating thumbnails and enabling AI autocompletion, you'll need to sign up for an OpenAI account and obtain an API key. Once you have your API key, make sure to configure it in the .env file, as described in the "Getting Started" section.

For detailed API documentation, refer to OpenAI's official documentation: [OpenAI API Documentation](https://platform.openai.com/docs/introduction).
