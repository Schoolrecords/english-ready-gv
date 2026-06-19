/* ============================================================
   NGÂN HÀNG ĐỀ KHẢO SÁT NĂNG LỰC TIẾNG ANH GIÁO VIÊN
   3 cấp: Tiểu học (A2) · THCS (B1) · THPT (B2)
   Cấu trúc mỗi đề: Nghe – Đọc – Use of English – Viết – Nói
   Dùng chung cho engine "Khao sat NL Tieng Anh.html"
   ============================================================ */
window.NGAN_HANG = {

/* =====================================================================
   ============================ TIỂU HỌC (A2) ==========================
   ===================================================================== */
tieuhoc: {
  code:'tieuhoc', label:'Tiểu học', bac:'Bậc 2 (A1→A2)', minutes:35,
  sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe (có thể nghe lại). Mỗi câu chọn một đáp án. Các câu đầu rất dễ.',
      parts:[
        { title:'Part 1 — Classroom instructions (Câu 1–4)',
          desc:'You will hear four short instructions in class. Choose the correct answer.',
          audio:"Part one. You will hear four short instructions. Number one. Good morning, class. Open your book to page ten. Number two. Children, please sit down and be quiet. Number three. It is time for lunch. Wash your hands, please. Number four. Take out your pencil and a piece of paper.",
          questions:[
            {id:1,q:'1. What page must the children open?',options:['Page 2','Page 10','Page 12','Page 20'],ans:1},
            {id:2,q:'2. What must the children do?',options:['Stand up','Sit down','Run','Sing'],ans:1},
            {id:3,q:'3. What time is it?',options:['Lunch time','Bed time','Story time','Home time'],ans:0},
            {id:4,q:'4. What do the children need?',options:['A book and a bag','A pencil and paper','A ball','A chair'],ans:1},
          ]},
        { title:'Part 2 — A short conversation (Câu 5–7)',
          desc:'Listen to two teachers talking about a meeting.',
          audio:"Part two. Listen to two teachers talking about a meeting. Anh: Hi Mai, what time is the meeting? Mai: At three o'clock, in Room 4. Anh: O K. Do I need to bring anything? Mai: Just a pen and your notebook. Anh: Thanks. See you there.",
          questions:[
            {id:5,q:'5. What time is the meeting?',options:["2 o'clock","3 o'clock","4 o'clock","5 o'clock"],ans:1},
            {id:6,q:'6. Where is the meeting?',options:['Room 2','Room 3','Room 4','Room 5'],ans:2},
            {id:7,q:'7. What should Anh bring?',options:['A book','A pen and a notebook','Lunch','A laptop'],ans:1},
          ]},
        { title:'Part 3 — How does the teacher feel? (Câu 8)',
          desc:'Listen to one teacher. Choose the feeling.',
          audio:"Part three. Listen to one teacher. How does she feel? Today my pupils gave me a flower and said thank you. I was very happy.",
          questions:[
            {id:8,q:'8. How does the teacher feel?',options:['Happy','Angry','Tired','Bored'],ans:0},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read',
      intro:'Đọc và chọn đáp án đúng. Phần biển báo có đáp án tiếng Việt để dễ hiểu.',
      parts:[
        { title:'Part 1 — Signs (Câu 9–11)', desc:'Đọc biển báo và chọn nghĩa đúng.',
          questions:[
            {id:9,context:'EXIT',q:'9. Biển báo này nghĩa là gì?',options:['Lối ra','Nhà vệ sinh','Căng tin','Lớp học'],ans:0},
            {id:10,context:'TOILET',q:'10. Biển báo này chỉ nơi nào?',options:['Nhà vệ sinh','Lối ra','Sân chơi','Văn phòng'],ans:0},
            {id:11,context:'BE QUIET — LIBRARY',q:'11. Trong thư viện, em phải…',options:['Giữ im lặng','Chạy nhanh','Ăn uống','Hát to'],ans:0},
          ]},
        { title:'Part 2 — Read about a pupil (Câu 12–14)', desc:'Read the short text and choose the correct answer.',
          passage:"This is Nam. He is seven years old. He is in Class 2. He likes drawing and football. His teacher is Ms. Lan.",
          questions:[
            {id:12,q:'12. How old is Nam?',options:['Two','Five','Seven','Ten'],ans:2},
            {id:13,q:'13. What class is Nam in?',options:['Class 1','Class 2','Class 3','Class 7'],ans:1},
            {id:14,q:'14. Who is his teacher?',options:['Ms. Lan','Ms. Mai','Mr. Nam','Ms. Hoa'],ans:0},
          ]},
      ]},
    { key:'C', name:'Từ vựng–Ngữ pháp', skill:'USE OF ENGLISH', type:'read',
      intro:'Choose the best answer (A, B, C or D). Các câu đầu rất dễ.',
      parts:[
        { title:'Use of English (Câu 15–20)', desc:'',
          questions:[
            {id:15,q:'15. I ____ a teacher.',options:['am','is','are','be'],ans:0},
            {id:16,q:'16. She ____ in a primary school.',options:['work','works','working','worked'],ans:1},
            {id:17,q:'17. The children ____ happy today.',options:['is','am','are','be'],ans:2},
            {id:18,q:'18. There are ____ pupils in my class.',options:['much','many','a','any'],ans:1},
            {id:19,q:'19. We go to school ____ Monday.',options:['in','at','on','to'],ans:2},
            {id:20,q:'20. Please ____ quiet in the library.',options:['be','is','are','being'],ans:0},
          ]},
      ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write',
      intro:'Viết một tin nhắn ngắn bằng tiếng Anh. Viết câu đơn giản, đúng là được.',
      tasks:[
        {id:'w1',title:'Viết tin nhắn (khoảng 30–40 từ)',min:25,
         prompt:'Write a short message to the parents of your class.<br>Tell them: – tomorrow is a holiday, so there is no school; – wish them a happy day.'},
      ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak',
      intro:'Bấm <b>▶ Bắt đầu</b> để nói. Nói câu đơn giản, rõ ràng.',
      tasks:[
        {id:'s1',title:'Part 1 — Về bản thân (làm quen)',prep:10,speak:45,
         prompt:'Answer about yourself: What is your name? Which school do you work at? What class do you teach? Do you like your job?'},
        {id:'s2',title:'Part 2 — Nói về trường của bạn',prep:30,speak:60,
         prompt:'<b>Talk about your school.</b> You can say: – the name of your school; – how many classes it has; – one thing you like about it.'},
      ]},
  ]
},

/* =====================================================================
   =============================== THCS (B1) ===========================
   ===================================================================== */
thcs: {
  code:'thcs', label:'THCS', bac:'Bậc 3 (B1)', minutes:40,
  sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe (có thể nghe lại). Nội dung dài và nhanh hơn cấp Tiểu học.',
      parts:[
        { title:'Part 1 — A school announcement (Câu 1–3)',
          desc:'Listen to an announcement for teachers.',
          audio:"Good morning, everyone. This is an announcement for all teachers. The English club meeting will be held on Friday afternoon at four o'clock in Room two oh five. Please bring your lesson plans. The meeting will last about one hour.",
          questions:[
            {id:1,q:'1. When is the meeting?',options:['Monday morning','Friday afternoon','Friday morning','Thursday afternoon'],ans:1},
            {id:2,q:'2. Where is the meeting?',options:['Room 200','Room 205','Room 250','Room 105'],ans:1},
            {id:3,q:'3. What should teachers bring?',options:['Textbooks','Lesson plans','Laptops','Notebooks'],ans:1},
          ]},
        { title:'Part 2 — Planning a school trip (Câu 4–6)',
          desc:'Listen to two teachers talking about a trip.',
          audio:"Lan: Hi Minh, are we still going on the school trip next week? Minh: Yes, we're taking the students to the science museum on Wednesday. Lan: Great. How will we get there? Minh: By bus. It leaves at eight, so tell the students to arrive by half past seven. Lan: O K. How much does it cost? Minh: It's free for students this year.",
          questions:[
            {id:4,q:'4. Where are they taking the students?',options:['History museum','Science museum','Art gallery','Zoo'],ans:1},
            {id:5,q:'5. What time should students arrive?',options:['7:00','7:30','8:00','8:30'],ans:1},
            {id:6,q:'6. How much does the trip cost for students?',options:['Free','Ten dollars','Five dollars','Twenty dollars'],ans:0},
          ]},
        { title:'Part 3 — A teacher’s opinion (Câu 7–8)',
          desc:'Listen to a teacher talking about group work.',
          audio:"I think group work is very useful in my classes. When students work together, they speak more English and they are not afraid of making mistakes. However, I always give clear instructions first.",
          questions:[
            {id:7,q:'7. What does the teacher think about group work?',options:['Useful','Boring','Difficult','Noisy'],ans:0},
            {id:8,q:'8. What does the teacher always do first?',options:['Gives homework','Gives clear instructions','Tests the students','Divides the class'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read',
      intro:'Đọc kỹ và chọn đáp án đúng nhất.',
      parts:[
        { title:'Part 1 — A notice (Câu 9–11)', desc:'Read the notice and answer.',
          passage:"NOTICE: The school library will be closed from 12th to 14th May for the installation of new computers. During this time, books can be returned to the office. The library will reopen on 15th May.",
          questions:[
            {id:9,q:'9. Why will the library close?',options:['To install new computers','To clean it','For the holidays','To paint it'],ans:0},
            {id:10,q:'10. Where can books be returned during the closure?',options:['The office','The library','The classroom','Nowhere'],ans:0},
            {id:11,q:'11. When does the library reopen?',options:['12th May','14th May','15th May','16th May'],ans:2},
          ]},
        { title:'Part 2 — Online learning (Câu 12–14)', desc:'Read the article and answer.',
          passage:"Online learning has become popular in many schools. It allows students to study at home and to review lessons whenever they want. However, some students find it hard to stay focused without a teacher nearby. Teachers say that a mix of online and classroom learning often works best.",
          questions:[
            {id:12,q:'12. What advantage of online learning is mentioned?',options:['Students can review lessons anytime','It is cheaper','It is faster','There is no homework'],ans:0},
            {id:13,q:'13. What problem do some students have?',options:['Staying focused','Finding computers','Reading books','Speaking English'],ans:0},
            {id:14,q:'14. What do teachers think works best?',options:['Only online learning','Only classroom learning','A mix of both','No learning at all'],ans:2},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read',
      intro:'Choose the best answer (A, B, C or D).',
      parts:[
        { title:'Use of English (Câu 15–20)', desc:'',
          questions:[
            {id:15,q:'15. I ____ English for five years.',options:['learn','have learned','am learning','learned'],ans:1},
            {id:16,q:'16. If it ____ tomorrow, we will cancel the trip.',options:['rains','will rain','rained','raining'],ans:0},
            {id:17,q:'17. This book is ____ than that one.',options:['interesting','more interesting','most interesting','interestingest'],ans:1},
            {id:18,q:'18. The homework ____ by the students every day.',options:['do','does','is done','is doing'],ans:2},
            {id:19,q:'19. The teacher ____ helped me is Ms. Lan.',options:['which','who','where','whose'],ans:1},
            {id:20,q:'20. We had to ____ the meeting because of the storm.',options:['put off','put on','put up','put down'],ans:0},
          ]},
      ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write',
      intro:'Viết một email ngắn bằng tiếng Anh, dùng câu rõ ràng, đúng ngữ pháp.',
      tasks:[
        {id:'w1',title:'Viết email (khoảng 60–80 từ)',min:50,
         prompt:'Write an email to a colleague suggesting that you start an English club for students.<br>Include: – when the club should meet; – one activity for the students; – why it would be useful.'},
      ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak',
      intro:'Bấm <b>▶ Bắt đầu</b> để nói. Trả lời thành câu đầy đủ, có ví dụ minh hoạ.',
      tasks:[
        {id:'s1',title:'Part 1 — Về công việc giảng dạy',prep:15,speak:50,
         prompt:'Talk about your teaching: What subject and level do you teach? How long have you been teaching? What do you enjoy most about your job?'},
        {id:'s2',title:'Part 2 — Một tiết học đáng nhớ',prep:30,speak:70,
         prompt:'<b>Talk about a memorable lesson you taught.</b> Say: – what the lesson was about; – why it was memorable; – what your students learned.'},
      ]},
  ]
},

/* =====================================================================
   =============================== THPT (B2) ===========================
   ===================================================================== */
thpt: {
  code:'thpt', label:'THPT', bac:'Bậc 4 (B2)', minutes:45,
  sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe. Nội dung mang tính học thuật, tốc độ tự nhiên.',
      parts:[
        { title:'Part 1 — A short lecture (Câu 1–3)',
          desc:'Listen to part of a talk on language learning.',
          audio:"Today I'd like to talk about how we acquire a second language. Research suggests that learners need a large amount of comprehensible input, that is, language they can mostly understand. Speaking fluently usually develops later, after a so-called silent period. Therefore, teachers should not force beginners to speak too early.",
          questions:[
            {id:1,q:'1. According to the speaker, what do learners need a lot of?',options:['Grammar rules','Comprehensible input','Vocabulary tests','Translation'],ans:1},
            {id:2,q:'2. When does fluent speaking usually develop?',options:['Immediately','After a silent period','Before listening','It never develops'],ans:1},
            {id:3,q:'3. What does the speaker advise teachers to do?',options:['Force students to speak early','Not force beginners to speak too early','Avoid listening tasks','Teach only grammar'],ans:1},
          ]},
        { title:'Part 2 — A discussion (Câu 4–6)',
          desc:'Listen to two colleagues discussing tests.',
          audio:"Anna: I'm not sure standardized tests really measure language ability. Ben: I agree to some extent, but they're practical for large numbers of students. Anna: True, though they often ignore speaking skills. Ben: Exactly. That's why I'd combine them with oral interviews.",
          questions:[
            {id:4,q:'4. What is Anna’s main concern about standardized tests?',options:['They are expensive','They may not measure ability well','They take too long','They are too easy'],ans:1},
            {id:5,q:'5. Why does Ben partly support them?',options:['They are practical for many students','They are fun','They test speaking','They are free'],ans:0},
            {id:6,q:'6. What does Ben suggest adding?',options:['More writing','Oral interviews','Homework','Group work'],ans:1},
          ]},
        { title:'Part 3 — A teacher’s view (Câu 7–8)',
          desc:'Listen to a teacher talking about motivation.',
          audio:"In my experience, giving students choice in their assignments increases motivation dramatically. When they can choose a topic they care about, the quality of their work improves, even if the task is challenging.",
          questions:[
            {id:7,q:'7. What increases motivation, according to the speaker?',options:['Giving students choice','Giving more tests','Reducing the workload','Strict rules'],ans:0},
            {id:8,q:'8. What happens to the quality of the work?',options:['It improves','It falls','It stays the same','It is not mentioned'],ans:0},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read',
      intro:'Đọc đoạn văn học thuật và chọn đáp án đúng nhất.',
      parts:[
        { title:'Technology in the classroom (Câu 9–12)', desc:'Read the passage and answer.',
          passage:"The integration of technology into classrooms has transformed teaching, but it is not without challenges. While digital tools can make lessons more engaging and provide instant feedback, an over-reliance on screens may reduce face-to-face interaction. Experts argue that technology should support, not replace, good teaching. The most effective educators use digital resources selectively, choosing them only when they add genuine value to learning.",
          questions:[
            {id:9,q:'9. What is one benefit of technology mentioned?',options:['Instant feedback','Lower costs','Less planning','Shorter lessons'],ans:0},
            {id:10,q:'10. What is a possible drawback?',options:['Reduced face-to-face interaction','Higher marks','More reading','Faster typing'],ans:0},
            {id:11,q:'11. What do experts argue technology should do?',options:['Replace teaching','Support teaching','End homework','Test students'],ans:1},
            {id:12,q:'12. How do effective educators use digital resources?',options:['All the time','Selectively','Never','Randomly'],ans:1},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read',
      intro:'Choose the best answer (A, B, C or D). Trình độ B2.',
      parts:[
        { title:'Use of English (Câu 13–18)', desc:'',
          questions:[
            {id:13,q:'13. Not only ____ late, but he also forgot the report.',options:['he was','was he','he is','is he'],ans:1},
            {id:14,q:'14. If I had known about the change, I ____ you.',options:['would tell','would have told','will tell','told'],ans:1},
            {id:15,q:'15. She is used to ____ in front of large classes.',options:['speak','speaking','spoke','speaks'],ans:1},
            {id:16,q:'16. He said he ____ the lesson the day before.',options:['prepares','had prepared','prepare','will prepare'],ans:1},
            {id:17,q:'17. We must ____ a solution to this problem soon.',options:['come up with','come across','come down','come over'],ans:0},
            {id:18,q:'18. ____ the bad weather, the school event went ahead.',options:['Despite','Although','However','Because'],ans:0},
          ]},
      ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write',
      intro:'Viết một đoạn văn nghị luận ngắn, có quan điểm và lý lẽ rõ ràng.',
      tasks:[
        {id:'w1',title:'Viết đoạn văn (khoảng 100–120 từ)',min:80,
         prompt:'Some people believe that technology should be used in every lesson.<br><b>To what extent do you agree?</b> Write a short paragraph giving your opinion and reasons.'},
      ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak',
      intro:'Bấm <b>▶ Bắt đầu</b> để nói. Trình bày mạch lạc, có lập luận và ví dụ.',
      tasks:[
        {id:'s1',title:'Part 1 — Bối cảnh giảng dạy',prep:15,speak:55,
         prompt:'Introduce yourself and your teaching context. What challenges do you face when teaching English at high school?'},
        {id:'s2',title:'Part 2 — Nêu và bảo vệ quan điểm',prep:45,speak:90,
         prompt:'<b>Express and justify your opinion:</b> "Should English exams include a speaking test? Why or why not?" Speak for about one minute, giving at least two reasons.'},
      ]},
  ]
},

};
