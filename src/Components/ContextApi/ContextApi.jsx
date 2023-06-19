import React from "react";
import { createContext, useState } from "react";


export const ContextData = createContext();

export const ContextApi = (props) => {
    const [data, setData] = useState([

        // Bollywood
        {    
            id: 1,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            title: "KABHI KHUSHI KABHIE GHAM",
            para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
            year: "14 December 2001",
          },
          {
            id: 2,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/95/Krrish_poster.jpg",
            title: "KRRISH",
            para: "Krrish is the story of a simple village boy Krishna (Hrithik Roshan) who lives with his grandmother (Rekha) having lost his parents to misfortune. Krishna meets Priya (Priyanka Chopra) when she comes with her group for a trek from Singapore. Having fallen in love with her, he rushes to Singapore on being called by Priya who is trying to save her job by getting Krishna to Singapore and having him pull unnaturally jaw-dropping stunts - something he does regularly in his village. But when he reaches Singapore, the biggest truth of his life uncovers itself, transforming him into ``Krrish``, a gallany superhero. What is it that alters his life to an extent as this?",
            year: "23 June 2006",
          },
          {
            id: 3,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/90/Bang_Bang_%282014_Film%29.jpg",
            title: "BANG BANG",
            para: "A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background.",
            year: "2 October 2014",
          },
          {
            id: 4,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BYmRiMmZmZGMtNjFhNi00MTIwLTlkNjQtNGM4ZTEzOWFmZmIwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg",
            title: "MUJHE DOSTHI KAROGE",
            para: '"What would you do if the one you loved was not actually the one you loved. What would you do if your best friend was in love with the one you love. What would you do if your best friends are sacrificing their love for you. Meet Raj (Hrithik Roshan), Pooja (Rani Mukerji) and Tina (Kareena Kapoor)- 3 best friends thrown into a situation that time, letters, love and separation have created for th',
            year: "9 August 2002",
          },
          {
            id: 5,
            category: "bollywood",
            img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2022/01/Untitled-design-2022-01-26T151639.382.jpg",
            title: "AGNEEPATH",
            para: "A young boys father is lynched before his eyes fifteen years later he returns home for revenge.",
            year: "26 January 2012",
          },
          {
            id: 6,
            category: "bollywood",
            img: "https://pbs.twimg.com/media/Fd1D0-KaEAMU3Im?format=jpg&name=900x900",
            title: "VIKRAM VEDHA",
            para: "A tough police officer sets out to track down and kill an equally tough gangsters.",
            year: "30 September 2022",
          },
          {
            id: 7,
            category: "bollywood",
            img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster_ce29dea2-91e6-43b6-81cc-1e2e0a1c1ae0.jpg?v=1675251704",
            title: "Pathan",
            para: "Indian RAW agent Pathaan (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own.",
            year: "25 January 2023",
          },
          {
            id: 8,
            category: "bollywood",
            img: "https://w0.peakpx.com/wallpaper/712/382/HD-wallpaper-movie-war-2019-hrithik-roshan-tiger-shroff.jpg",
            title: "War",
            para: "An Indian soldier is assigned to eliminate his former mentor and he must keep his wits about him if he is to be successful in his mission; when the two men collide, it results in a barrage of battles and bullets.",
            year: "2 October 2019",
          },
          {
            id: 9,
            category: "bollywood",
            img: "https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-rocky-hd-images-001.jpg",
            title: "KGF",
            para: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia.",
            year: "20 December 2018 ",
          },

        //   Fitness
          { 
            id: 10,
            category: "fitness",
            img:'https://media1.popsugar-assets.com/files/thumbor/VAPe-sKElq1UEu9dg6UKo45UJtM/104x208:3315x3419/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/30/943/n/1922729/f2e892315e0a6e7e776859.71445957_/i/yoga-poses-to-get-strong-for-headstand.jpg',
            title:"HEAD STAND",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
          },
          {
            id: 11,
            category: "fitness",
            img:'https://www.yogajournal.com/wp-content/uploads/2022/01/Forearm-Plank_Andrew-Clark.jpg',
            title:'ELBOW PLANK',
            para:'Plank pose is most commonly used as a transitional pose, moving the body from high to lower planes, and vice versa. It is used within the sun salutation (surya namaskara) sequences and vinyasa sequences, as the yogi steps back to plank and lowers into chatturanga. Plank pose is also known as a pose in its own right, and is often held for long periods of time to build strength, heat, and energy in the body. Because plank pose requires a certain extent of strength and endurance, it is an ideal pose to refocus and re-energize, and overcome from sluggish energy or ‘stuck’ emotions.'
          },
          {
            id: 12,
            category: "fitness",
            img:'https://global-uploads.webflow.com/5fe33d036237252135e3e74d/630cbacb4c81fd7eeb81e0cb_Chakrasana%20by%20cult.fit.webp',
            title:'CHAKRASANA POSE',
            para:'Chakrasana is a deep back-bending pose that is performed for spinal flexibility. The word Chakrasana comes from the words ‘chakra’ meaning wheel and ‘asana’ meaning posture. It is also known as Urdhva Dhanurasana, Bridge Pose, or the Full Wheel Pose, and is an advanced level pose. Chakrasana pose gets its name from the semi-circular position that your body assumes while performing this asana- that of a wheel.The Chakrasana yoga pose stretches the muscles in your chest, shoulders, hamstrings, spinal extensors, and hip flexors. '
          },
          {
            id: 13,
            category: "fitness",
            img:'https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/woman%20performing%20bow%20pose.jpeg?itok=qcH0TMLI',
            title:'DHANURASANA POSE',
            para:'Bow Pose (Dhanurasana) is an intermediate yoga pose similar to a backbend. It’s one of the 12 basic Hatha Yoga poses. By lifting your torso up and backward, the chest is opened and the back is deeply stretched. This pose is a great way to deeply stretch the back after a long day of hunching over.'
      },
           { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5F-V5Mcs977_eGhAN-XiKbD3_er4EA_BKm03H7GIeBw&usqp=CAU&ec=48600113',
            title:"Plank",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
      { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5Cn7HxH398EcpjA6xhVoRp6oV9p3wvuP7ZDMLeDkeg&usqp=CAU&ec=48600113',
            title:"Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
      { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyenwzVRzDPDGphN1N9BlP-ymyV_1z2OuperapJS4Lkw&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6YDU7ZmBl7Z_RP2K71w5yK0djCtsbXQrLIsylWgVsQ&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_ifi641JkskGP_f113Xi88rlfjkfkqFcd1aVgm1wAQ&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlRh6TIxdeVGWtB8Qvyf6gNgkKW6HMZGKatks-4D4Bw&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
      { 
            id: 10,
            category: "fitness",
            img:'https://media1.popsugar-assets.com/files/thumbor/VAPe-sKElq1UEu9dg6UKo45UJtM/104x208:3315x3419/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/30/943/n/1922729/f2e892315e0a6e7e776859.71445957_/i/yoga-poses-to-get-strong-for-headstand.jpg',
            title:"HEAD STAND",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
          },
          {
            id: 11,
            category: "fitness",
            img:'https://www.yogajournal.com/wp-content/uploads/2022/01/Forearm-Plank_Andrew-Clark.jpg',
            title:'ELBOW PLANK',
            para:'Plank pose is most commonly used as a transitional pose, moving the body from high to lower planes, and vice versa. It is used within the sun salutation (surya namaskara) sequences and vinyasa sequences, as the yogi steps back to plank and lowers into chatturanga. Plank pose is also known as a pose in its own right, and is often held for long periods of time to build strength, heat, and energy in the body. Because plank pose requires a certain extent of strength and endurance, it is an ideal pose to refocus and re-energize, and overcome from sluggish energy or ‘stuck’ emotions.'
          },
          {
            id: 12,
            category: "fitness",
            img:'https://global-uploads.webflow.com/5fe33d036237252135e3e74d/630cbacb4c81fd7eeb81e0cb_Chakrasana%20by%20cult.fit.webp',
            title:'CHAKRASANA POSE',
            para:'Chakrasana is a deep back-bending pose that is performed for spinal flexibility. The word Chakrasana comes from the words ‘chakra’ meaning wheel and ‘asana’ meaning posture. It is also known as Urdhva Dhanurasana, Bridge Pose, or the Full Wheel Pose, and is an advanced level pose. Chakrasana pose gets its name from the semi-circular position that your body assumes while performing this asana- that of a wheel.The Chakrasana yoga pose stretches the muscles in your chest, shoulders, hamstrings, spinal extensors, and hip flexors. '
          },
          {
            id: 13,
            category: "fitness",
            img:'https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/woman%20performing%20bow%20pose.jpeg?itok=qcH0TMLI',
            title:'DHANURASANA POSE',
            para:'Bow Pose (Dhanurasana) is an intermediate yoga pose similar to a backbend. It’s one of the 12 basic Hatha Yoga poses. By lifting your torso up and backward, the chest is opened and the back is deeply stretched. This pose is a great way to deeply stretch the back after a long day of hunching over.'
      },
           { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5F-V5Mcs977_eGhAN-XiKbD3_er4EA_BKm03H7GIeBw&usqp=CAU&ec=48600113',
            title:"Plank",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
      { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5Cn7HxH398EcpjA6xhVoRp6oV9p3wvuP7ZDMLeDkeg&usqp=CAU&ec=48600113',
            title:"Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
      { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyenwzVRzDPDGphN1N9BlP-ymyV_1z2OuperapJS4Lkw&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6YDU7ZmBl7Z_RP2K71w5yK0djCtsbXQrLIsylWgVsQ&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_ifi641JkskGP_f113Xi88rlfjkfkqFcd1aVgm1wAQ&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
       { 
            id: 10,
            category: "fitness",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlRh6TIxdeVGWtB8Qvyf6gNgkKW6HMZGKatks-4D4Bw&usqp=CAU&ec=48600113',
            title:"Side Situps",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?"
      },
          



        //   Food
          {
            id: 14,
            category: "food",
            img: 'https://pristineorganics.com/wp-content/uploads/2019/06/03-1-1-1.jpg',
            title: 'MILLETS',
            description: 'Generally, millets are small-grained, annual, warm-weather cereals belonging to the grass family. They are highly tolerant of drought and other extreme weather conditions and have a similar nutrient content to other major cereals.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
          },
          {
            id: 15,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEjlalMuVUPtZIcnic7HtYyKymdG72gQYB8c7Ld-fzvwty9stQdO6B8BaLLKWojy0SwI&usqp=CAU',
            title: `PROTEIN BAR`,
            description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
          },
          {
            id: 16,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
            title: 'BROCCOLI',
            description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
          },
          {
            id: 17,
            category: "food",
            img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
            title: 'BANANA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakFlH2zXBcGY2WtPWcycqIFojrYHkhosx3ckaOtNQ1w&usqp=CAU&ec=48600113',
            title: 'Pasta',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://madhurasrecipe.com/wp-content/uploads/2020/10/Masala-Maggie.jpg',
            title: 'Maggie',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
            title: 'Biryani',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
            title: 'PIZZA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886',
            title: 'Burger',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/06/29/21080-great-garlic-bread-3x4-0157.jpg',
            title: 'Garlic Bread',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
           {
            id: 14,
            category: "food",
            img: 'https://pristineorganics.com/wp-content/uploads/2019/06/03-1-1-1.jpg',
            title: 'MILLETS',
            description: 'Generally, millets are small-grained, annual, warm-weather cereals belonging to the grass family. They are highly tolerant of drought and other extreme weather conditions and have a similar nutrient content to other major cereals.'
          },
          {
            id: 15,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEjlalMuVUPtZIcnic7HtYyKymdG72gQYB8c7Ld-fzvwty9stQdO6B8BaLLKWojy0SwI&usqp=CAU',
            title: `PROTEIN BAR`,
            description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
          },
          {
            id: 16,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
            title: 'BROCCOLI',
            description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
          },
          {
            id: 17,
            category: "food",
            img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
            title: 'BANANA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakFlH2zXBcGY2WtPWcycqIFojrYHkhosx3ckaOtNQ1w&usqp=CAU&ec=48600113',
            title: 'Pasta',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://madhurasrecipe.com/wp-content/uploads/2020/10/Masala-Maggie.jpg',
            title: 'Maggie',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },
      {
            id: 17,
            category: "food",
            img: 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
            title: 'Biryani',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
            title: 'PIZZA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886',
            title: 'Burger',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },{
            id: 17,
            category: "food",
            img: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/06/29/21080-great-garlic-bread-3x4-0157.jpg',
            title: 'Garlic Bread',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere nam nobis dolor dignissimos neque laborum iusto, provident soluta quas molestiae quos repellat in quo totam veritatis consectetur sed suscipit quibusdam at quia distinctio dicta quidem! Pariatur beatae eum vel hic impedit? Vero illo molestiae, repudiandae est quo earum mollitia?'
      },

        //   Hollywood
          {
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
            title: 'BLACK PANTHER: WAKANDA FOREVER',
            description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
            date: '11 November 2022'
          },
          {
            id: 19,
            category: "hollywood",
            img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
            title: 'AVATAR',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            date: '18 December 2009'
          },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
              title: 'BLACK ADAM',
              description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
              date: '21 October 2022'
      },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
              title: 'Shang-Chi and the Legend of the Ten Rings',
              description: 'Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'

,
              date: '3 septmber 2022'
      },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
              title: 'The Dark Knight Rises',
              description: 'The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolans The Dark Knight trilogy, and the sequel to The Dark Knight (2008). The film stars Christian Bale as Bruce Wayne / Batman, alongside Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, and Morgan Freeman. Eight years after the events of The Dark Knight, the revolutionary Bane forces Bruce Wayne to resume his role as Batman and save Gotham City from nuclear destruction.',
              date: '20 July 2022'
      },

          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg',
              title: 'Joker (2019 film)',
              description: 'Joker is a 2019 American neo-noir psychological thriller film directed by Todd Phillips, who also co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and serves as a standalone origin story for the character. Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz and Frances Conroy appear in supporting roles. Distributed by Warner Bros. Pictures, Joker was produced by Warner Bros. Pictures and DC Films in association with Village Roadshow Pictures, Bron Creative and Joint Effort'
             ,
              date: '31 December 2022'
      },
          {
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif',
            title: 'The Return of the King',
            description: 'Tolkien conceived of The Lord of the Rings as a single work comprising six "books" plus extensive appendices. In 1953, he proposed titles for the six books to his publisher, Rayner Unwin; Book Five was to be The War of the Ring, while Book Six was to be The End of the Third Age.[2] These titles were eventually used in the (2000) Millennium edition. Rayner Unwin however split the work into three volumes, publishing the fifth and sixth books with the appendices into the final volume with the title The Return of the King. Tolkien felt the chosen title revealed too much of the story, and indicated that he preferred The War of the Ring as a title for the volume',
            date: '11 November 2022'
          },
          {
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/330px-No_Time_to_Die_poster.jpg',
            title: 'No Time to Die',
            description: 'No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent James Bond. It was directed by Cary Joji Fukunaga from a screenplay by Neal Purvis, Robert Wade, Fukunaga and Phoebe Waller-Bridge. Léa Seydoux, Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz, Rory Kinnear and Ralph Fiennes reprise their roles from previous films, with Rami Malek, Lashana Lynch, Billy Magnussen, Ana de Armas, David Dencik and Dali Benssalah also starring. In No Time to Die, Bond has left active service with MI6 and is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful and vengeful adversary armed with a technology capable of killing millions.',
            date: '11 November 2022'
          },{
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg',
              title: 'Mad Max: Fury Road',
              description: 'Mad Max: Fury Road is a 2015 Australian post-apocalyptic action film co-written, co-produced, and directed by George Miller. Miller collaborated with Brendan McCarthy and Nico Lathouris on the screenplay. The fourth instalment in the Mad Max franchise,[7] it was produced by Village Roadshow Pictures, Kennedy Miller Mitchell, and RatPac-Dune Entertainment and distributed by Roadshow Entertainment in Australia and by Warner Bros. Pictures internationally. The film stars Tom Hardy and Charlize Theron, with Nicholas Hoult, Hugh Keays-Byrne, Rosie Huntington-Whiteley, Riley Keough, Zoë Kravitz, Abbey Lee, and Courtney Eaton in supporting roles. Set in a post-apocalyptic desert wasteland where petrol and water are scarce commodities, Fury Road follows Max Rockatansky, who joins forces with Imperator Furiosa against cult leader Immortan Joe and his army, leading to a lengthy road battle.',
              date: '20 July 2022'
      },{
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/7/73/Spider-Man_-_Into_the_Spider-Verse_%282018%29_Theatrical_Poster.jpg',
              title: 'Spider-Man: Into the Spider-Verse',
              description: 'Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment. Distributed by Sony Pictures Releasing, it is the first animated film in the Spider-Man franchise.[4][5] Directed by Bob Persichetti, Peter Ramsey, and Rodney Rothman (in Persichetti and Rothmans feature directorial debuts) from a screenplay by Phil Lord and Rothman, it stars Shameik Moore as Morales, alongside the voices of Jake Johnson, Hailee Steinfeld, Mahershala Ali, Brian Tyree Henry, Lily Tomlin, Luna Lauren Vélez, Zoë Kravitz, John Mulaney, Kimiko Glenn, Nicolas Cage, and Liev Schreiber. Inspired by the Amazing Spider-Man story arc "Spider-Verse", while also taking inspiration from the Ultimate Marvel comics "The Death of Spider-Man" and Spider-Men that served as Miles Morales debut, the films story follows Miles as he becomes the new Spider-Man and joins other Spider-People from various parallel universes to save his universe from Kingpin.',
              date: '20 July 2022'
      },{
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
            title: 'BLACK PANTHER: WAKANDA FOREVER',
            description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
            date: '11 November 2022'
          },
          {
            id: 19,
            category: "hollywood",
            img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
            title: 'AVATAR',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            date: '18 December 2009'
          },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
              title: 'BLACK ADAM',
              description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
              date: '21 October 2022'
      },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
              title: 'Shang-Chi and the Legend of the Ten Rings',
              description: 'Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'

,
              date: '3 septmber 2022'
      },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
              title: 'The Dark Knight Rises',
              description: 'The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolans The Dark Knight trilogy, and the sequel to The Dark Knight (2008). The film stars Christian Bale as Bruce Wayne / Batman, alongside Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, and Morgan Freeman. Eight years after the events of The Dark Knight, the revolutionary Bane forces Bruce Wayne to resume his role as Batman and save Gotham City from nuclear destruction.',
              date: '20 July 2022'
      },

          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg',
              title: 'Joker (2019 film)',
              description: 'Joker is a 2019 American neo-noir psychological thriller film directed by Todd Phillips, who also co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and serves as a standalone origin story for the character. Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz and Frances Conroy appear in supporting roles. Distributed by Warner Bros. Pictures, Joker was produced by Warner Bros. Pictures and DC Films in association with Village Roadshow Pictures, Bron Creative and Joint Effort'
             ,
              date: '31 December 2022'
      },
          {
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif',
            title: 'The Return of the King',
            description: 'Tolkien conceived of The Lord of the Rings as a single work comprising six "books" plus extensive appendices. In 1953, he proposed titles for the six books to his publisher, Rayner Unwin; Book Five was to be The War of the Ring, while Book Six was to be The End of the Third Age.[2] These titles were eventually used in the (2000) Millennium edition. Rayner Unwin however split the work into three volumes, publishing the fifth and sixth books with the appendices into the final volume with the title The Return of the King. Tolkien felt the chosen title revealed too much of the story, and indicated that he preferred The War of the Ring as a title for the volume',
            date: '11 November 2022'
          },

        //   Technology
          {
            id: 21,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 22,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 23,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
      },
           {
            id: 21,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 22,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 23,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
          }, {
            id: 21,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 22,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 23,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
          }, {
            id: 21,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 22,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 23,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
          }



    ])
  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  )
}

