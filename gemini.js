/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// import {
//             GoogleGenerativeAI,
//             HarmCategory,
//             HarmBlockThreshold,
//           } from "@google/generative-ai"
          
//           // const apiKey = import.meta.env.VITE_GEMINI_API_KEY
//           const apiKey = import.meta.env.VITE_GEMINI_API_KEY
//           const genAI = new GoogleGenerativeAI(apiKey)
          
//           const model = genAI.getGenerativeModel({
//             model: "gemini-1.5-flash",
//           })
          
          // const generationConfig = {
          //   temperature: 1,
          //   topP: 0.95,
          //   topK: 64,
          //   maxOutputTokens: 8192,
          //   responseMimeType: "text/plain",
          // }
          
          // async function run(prompt) {
          //   const chatSession = model.startChat({
          //     generationConfig,
          //     // safetySettings: Adjust safety settings
          //     // See https://ai.google.dev/gemini-api/docs/safety-settings
          //     history: [],
          //   })
          
          //   const result = await chatSession.sendMessage(prompt)
          //   const response = result.response.text()
          //   console.log(result.response.text())
          
          //   return response
          // }
          
          // export default run


          import {
            GoogleGenerativeAI,
            HarmCategory,
            HarmBlockThreshold,
          } from "@google/generative-ai"
          
          
          const MODEL_NAME = "gemini-1.0-pro";
          const API_KEY = "AIzaSyDsfJJGBBic2BQUGn_89q-7R7pMyBb_dUs";
          
          async function run(prompt) {
          
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });
          
            const generationConfig = {
                          temperature: 1,
                          topP: 0.95,
                          topK: 40,
                          maxOutputTokens: 8192,
                          responseMimeType: "text/plain",
                        };
          
            const safetySettings = [
              {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                 threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
              },
              {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
              },
            ];
          
            const chat = model.startChat({
              generationConfig,
              safetySettings,
              history: [
               
              ],
            });
          
            const result = await chat.sendMessage(prompt)
            const response = result.response.text()
            console.log(result.response.text())
          
            return response
          }
          
          export default run;