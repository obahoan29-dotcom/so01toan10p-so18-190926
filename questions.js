const examData = {
    maDe: "DE01TOAN10PSO18",
    title: "ĐỀ SỐ 01 - TOÁN 10. ÔN TẬP HỌC KÌ 1 10p",
    password: "",
    timeLimitMinutes: 90,
    
    // Cấu hình thời gian MỞ và ĐÓNG bài thi (Định dạng: YYYY-MM-DDTHH:mm:ss)
    examStartTimeStr: "2026-09-18T00:00:00",
    examEndTimeStr: "2026-09-25T23:59:59",
    
    images: {
        "img_1": "",
        "img_2": "",
        "img_3": "",
        "img_4": "",
        "img_5": "",
        "img_6": "",
        "img_7": "",
        "img_8": "",
        "img_9": "",
        "img_10": "",
        "img_11": "",
        "img_12": "",
        "img_13": "",
        "img_14": "",
        "img_15": "https://i.ibb.co/placeholder_q15.png", // Thay bằng link ảnh biểu đồ Ven của Câu 15
        "img_16": "",
        "img_17": "",
        "img_18": "",
        "img_19": "https://i.ibb.co/placeholder_q19.png", // Thay bằng link ảnh biểu đồ Ven của Câu 19
        "img_20": "",
        "img_21": "",
        "img_22": "",
        "img_23": "",
        "img_24": "",
        "img_25": "https://i.ibb.co/placeholder_q25.png", // Thay bằng link ảnh trục số của Câu 25
        "img_26": "",
        "img_27": "",
        "img_28": "",
        "img_29": "",
        "img_30": "",
        "img_31": "",
        "img_32": "",
        "img_33": "",
        "img_34": "",
        "img_35": "",
        "img_36": "",
        "img_37": "",
        "img_38": "",
        "img_39": "",
        "img_40": "",
        "img_41": "",
        "img_42": "",
        "img_43": "",
        "img_44": ""
    },
    questions: [
        // ==================== PHẦN 1. TRẮC NGHIỆM NHIỀU LỰA CHỌN (CÂU 1 - CÂU 37) ====================
        {
            id: 1,
            type: "multiple_choice",
            question: "Trong các phát biểu sau, phát biểu nào là mệnh đề đúng?",
            imageKey: "img_1",
            options: [
                "$\\pi$ là một số hữu tỉ.",
                "Tổng của độ dài hai cạnh một tam giác lớn hơn độ dài cạnh thứ ba.",
                "Bạn có chăm học không?",
                "Con thì thấp hơn cha."
            ],
            correct: 1,
            explanation: "Câu B là một định lý Toán học luôn đúng (Bất đẳng thức tam giác). Câu A là mệnh đề sai. Câu C là câu hỏi, câu D không mang tính đúng/sai rõ ràng nên không phải là mệnh đề toán học."
        },
        {
            id: 2,
            type: "multiple_choice",
            question: "Trong các câu sau đây câu nào không phải là mệnh đề?",
            imageKey: "img_2",
            options: [
                "Một năm có $365$ ngày.",
                "Học lớp $10$ thật vui.",
                "Nha Trang là thành phố của Khánh Hòa.",
                "$2 + 3 = 6$."
            ],
            correct: 1,
            explanation: "Câu B là câu cảm thán, bộc lộ cảm xúc, không có tính đúng sai nên không phải là mệnh đề."
        },
        {
            id: 3,
            type: "multiple_choice",
            question: "Trong các mệnh đề sau, mệnh đề nào sai?",
            imageKey: "img_3",
            options: [
                "\"$\\exists x \\in \\mathbb{Q}, x$ chia hết cho 5\".",
                "\"$\\forall x \\in \\mathbb{R} : 5x = x \\cdot 5$\".",
                "\"$\\exists x \\in \\mathbb{R} : x^2 + x + 2 > 0$\".",
                "\"$\\exists x \\in \\mathbb{Z} : 2x + 3 = 6$\"."
            ],
            correct: 3,
            explanation: "Phương trình $2x + 3 = 6 \\Leftrightarrow x = 1,5 \\notin \\mathbb{Z}$, do đó mệnh đề D sai."
        },
        {
            id: 4,
            type: "multiple_choice",
            question: "Trong các mệnh đề sau, mệnh đề nào đúng?",
            imageKey: "img_4",
            options: [
                "$\\forall x \\in \\mathbb{R}, x^2 > 1 \\Rightarrow x > -1$.",
                "$\\forall x \\in \\mathbb{R}, x^2 > 1 \\Rightarrow x > 1$.",
                "$\\forall x \\in \\mathbb{R}, x > -1 \\Rightarrow x^2 > 1$.",
                "$\\forall x \\in \\mathbb{R}, x > 1 \\Rightarrow x^2 > 1$."
            ],
            correct: 3,
            explanation: "Nếu $x > 1$ thì do 2 vế đều dương, bình phương 2 vế ta được $x^2 > 1$. Mệnh đề D là mệnh đề đúng."
        },
        {
            id: 5,
            type: "multiple_choice",
            question: "Trong các mệnh đề dưới đây mệnh đề nào đúng?",
            imageKey: "img_5",
            options: [
                "$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$.",
                "$\\forall x \\in \\mathbb{R}, x^2 > x$.",
                "$\\exists r \\in \\mathbb{Q}, r^2 = 7$.",
                "$\\forall n \\in \\mathbb{N}, n+4$ chia hết cho 4."
            ],
            correct: 0,
            explanation: "Ta có $x^2 \\ge 0 \\, \\forall x \\in \\mathbb{R} \\Rightarrow x^2 + 1 \\ge 1 > 0 \\, \\forall x \\in \\mathbb{R}$. Do đó A đúng."
        },
        {
            id: 6,
            type: "multiple_choice",
            question: "Cho mệnh đề \"phương trình $x^2 - 4x + 4 = 0$ có nghiệm”. Mệnh đề phủ định của mệnh đề đã cho và tính đúng, sai của mệnh đề phủ định là:",
            imageKey: "img_6",
            options: [
                "Phương trình $x^2 - 4x + 4 = 0$ có nghiệm. Đây là mệnh đề đúng.",
                "Phương trình $x^2 - 4x + 4 = 0$ có nghiệm. Đây là mệnh đề sai.",
                "Phương trình $x^2 - 4x + 4 = 0$ vô nghiệm. Đây là mệnh đề đúng.",
                "Phương trình $x^2 - 4x + 4 = 0$ vô nghiệm. Đây là mệnh đề sai."
            ],
            correct: 3,
            explanation: "Mệnh đề phủ định là \"phương trình $x^2 - 4x + 4 = 0$ vô nghiệm\". Tuy nhiên phương trình này có nghiệm $x = 2$, nên mệnh đề phủ định là mệnh đề sai."
        },
        {
            id: 7,
            type: "multiple_choice",
            question: "Mệnh đề $\\forall x \\in \\mathbb{R}, x^2 - 2 + a > 0$ với $a$ là số thực cho trước. Tìm $a$ để mệnh đề đúng.",
            imageKey: "img_7",
            options: [
                "$a \\le 2$.",
                "$a < 2$.",
                "$a = 2$.",
                "$a > 2$."
            ],
            correct: 3,
            explanation: "Ta có $x^2 \\ge 0 \\, \\forall x$. Để $x^2 + (a - 2) > 0 \\, \\forall x$ thì ta cần $a - 2 > 0 \\Leftrightarrow a > 2$."
        },
        {
            id: 8,
            type: "multiple_choice",
            question: "Cho mệnh đề: “$\\forall x \\in \\mathbb{R}, x^2 + 3x + 5 > 0$”. Mệnh đề phủ định của mệnh đề trên là",
            imageKey: "img_8",
            options: [
                "$\\forall x \\in \\mathbb{R}, x^2 + 3x + 5 \\le 0$.",
                "$\\exists x \\in \\mathbb{R}, x^2 + 3x + 5 \\le 0$.",
                "$\\forall x \\in \\mathbb{R}, x^2 + 3x + 5 < 0$.",
                "$\\exists x \\in \\mathbb{R}, x^2 + 3x + 5 > 0$."
            ],
            correct: 1,
            explanation: "Phủ định của $\\forall$ là $\\exists$, phủ định của $>$ là $\\le$."
        },
        {
            id: 9,
            type: "multiple_choice",
            question: "Cho mệnh đề: \"$\\exists x \\in \\mathbb{R}, x^2 + x + 1 = 0$\". Mệnh đề phủ định của mệnh đề trên là:",
            imageKey: "img_9",
            options: [
                "\"$\\forall x \\in \\mathbb{R}, x^2 + x + 1 = 1$\".",
                "\"$\\forall x \\in \\mathbb{R}, x^2 + x + 1 \\ne 0$\".",
                "\"$\\forall x \\in \\mathbb{R}, x^2 + x + 1 = 0$\".",
                "\"$\\exists x \\in \\mathbb{R}, x^2 + x + 1 \\ne 0$\"."
            ],
            correct: 1,
            explanation: "Phủ định của $\\exists$ là $\\forall$, phủ định của $=$ là $\\ne$."
        },
        {
            id: 10,
            type: "multiple_choice",
            question: "Mệnh đề $P(x) : \"\\forall x \\in \\mathbb{R}, x^2 - x + 3 < 0\"$. Phủ định của mệnh đề $P(x)$ là:",
            imageKey: "img_10",
            options: [
                "$\\exists x \\in \\mathbb{R}, x^2 - x + 3 > 0$.",
                "$\\forall x \\in \\mathbb{R}, x^2 - x + 3 > 0$.",
                "$\\forall x \\notin \\mathbb{R}, x^2 - x + 3 \\ge 0$.",
                "$\\exists x \\in \\mathbb{R}, x^2 - x + 3 \\ge 0$."
            ],
            correct: 3,
            explanation: "Phủ định của lượng từ $\\forall$ là $\\exists$, phủ định của dấu $<$ là $\\ge$."
        },
        {
            id: 11,
            type: "multiple_choice",
            question: "Trong các tập hợp sau, tập hợp nào là tập rỗng?",
            imageKey: "img_11",
            options: [
                "$M = \\{x \\in \\mathbb{N} \\mid 2x - 1 = 0\\}$.",
                "$M = \\{x \\in \\mathbb{Q} \\mid 3x + 2 = 0\\}$.",
                "$M = \\{x \\in \\mathbb{R} \\mid x^2 - 6x + 9 = 0\\}$.",
                "$M = \\{x \\in \\mathbb{Z} \\mid x^2 = 0\\}$."
            ],
            correct: 0,
            explanation: "Ở đáp án A: Phương trình $2x - 1 = 0 \\Leftrightarrow x = \\frac{1}{2} \\notin \\mathbb{N}$. Vậy tập hợp $M = \\emptyset$."
        },
        {
            id: 12,
            type: "multiple_choice",
            question: "Cho tập hợp $A=\\{1;2;3;4\\}$. Tập hợp $A$ có tất cả bao nhiêu tập con có đúng 3 phần tử.",
            imageKey: "img_12",
            options: [
                "3.",
                "16.",
                "4.",
                "5."
            ],
            correct: 2,
            explanation: "Số tập con có đúng 3 phần tử của tập hợp gồm 4 phần tử là $C_4^3 = 4$."
        },
        {
            id: 13,
            type: "multiple_choice",
            question: "Cho hai tập hợp $A = \\{0;2;3;5\\}$ và $B = \\{2;7\\}$. Khi đó $A \\cap B$",
            imageKey: "img_13",
            options: [
                "$A \\cap B = \\{2;5\\}$.",
                "$A \\cap B = \\{2\\}$.",
                "$A \\cap B = \\emptyset$.",
                "$A \\cap B = \\{0;2;3;5;7\\}$."
            ],
            correct: 1,
            explanation: "Giao của hai tập hợp là phần tử chung của cả hai tập, tức là $\{2\}$."
        },
        {
            id: 14,
            type: "multiple_choice",
            question: "Cho hai tập hợp $X = \\{1;2;4;7;9\\}$ và $Y = \\{-1;0;7;10\\}$. Tập hợp $X \\cup Y$ có bao nhiêu phần tử?",
            imageKey: "img_14",
            options: [
                "9.",
                "7.",
                "8.",
                "10."
            ],
            correct: 2,
            explanation: "Ta có $X \\cup Y = \\{-1;0;1;2;4;7;9;10\\}$. Có tổng cộng 8 phần tử."
        },
        {
            id: 15,
            type: "multiple_choice",
            question: "Phần tô đậm trong hình vẽ sau biểu diễn tập hợp nào?",
            imageKey: "img_15",
            options: [
                "$B \\setminus A$.",
                "$A \\setminus B$.",
                "$A \\cap B$.",
                "$A \\cup B$."
            ],
            correct: 0,
            explanation: "Phần tô đậm nằm hoàn toàn trong tập B nhưng không chứa phần giao của B và A, tức là những phần tử thuộc B nhưng không thuộc A. Tập hợp đó là $B \\setminus A$."
        },
        {
            id: 16,
            type: "multiple_choice",
            question: "Cho hai tập hợp $A = \\{2;4;6;9\\}, B = \\{1;2;3;4\\}$. Tập $A \\setminus B$ bằng tập hợp nào sau đây?",
            imageKey: "img_16",
            options: [
                "$\\{2;4\\}$.",
                "$\\{1;3\\}$.",
                "$\\{6;9\\}$.",
                "$\\{6;9;1;3\\}$."
            ],
            correct: 2,
            explanation: "Những phần tử thuộc A nhưng không thuộc B là 6 và 9. Vậy $A \\setminus B = \\{6;9\\}$."
        },
        {
            id: 17,
            type: "multiple_choice",
            question: "Chọn khẳng định sai trong các khẳng định sau:",
            imageKey: "img_17",
            options: [
                "$\\mathbb{N} \\cap \\mathbb{Z} = \\mathbb{N}$.",
                "$\\mathbb{Q} \\cup \\mathbb{R} = \\mathbb{R}$.",
                "$\\mathbb{Q} \\cap \\mathbb{N}^* = \\mathbb{N}^*$.",
                "$\\mathbb{Q} \\cup \\mathbb{N}^* = \\mathbb{N}^*$."
            ],
            correct: 3,
            explanation: "Khẳng định sai là D, vì $\\mathbb{Q} \\cup \\mathbb{N}^*$ phải bằng $\\mathbb{Q}$ (do $\\mathbb{N}^* \\subset \\mathbb{Q}$)."
        },
        {
            id: 18,
            type: "multiple_choice",
            question: "Cho $A$: \"Tập hợp các học sinh khối 10 học giỏi\", $B$: “Tập hợp các học sinh nữ học giỏi”, $C$: “Tập hợp các học sinh nam khối 10 học giỏi”. Vậy tập hợp $C$ là:",
            imageKey: "img_18",
            options: [
                "$A \\subset B$.",
                "$B \\setminus A$.",
                "$A \\cap B$.",
                "$A \\setminus B$."
            ],
            correct: 3,
            explanation: "Tập C là những bạn học sinh nam lớp 10 học giỏi, tức là lấy toàn bộ học sinh lớp 10 học giỏi (tập A) bỏ đi những bạn học sinh nữ học giỏi (tập B). Ta có $C = A \\setminus B$."
        },
        {
            id: 19,
            type: "multiple_choice",
            question: "Cho các tập hợp $A, B, C$ được minh họa bằng biểu đồ Ven như hình vẽ. Phần tô màu xám trong hình là biểu diễn của tập hợp nào sau đây?",
            imageKey: "img_19",
            options: [
                "$A \\cap B \\cap C$.",
                "$(A \\setminus C) \\cup (A \\setminus B)$.",
                "$(A \\cup B) \\setminus C$.",
                "$(A \\cap B) \\setminus C$."
            ],
            correct: 3,
            explanation: "Phần tô xám là phần chung của tập A và tập B (tức là $A \\cap B$), nhưng không lấy phần nằm trong tập C. Vậy nó biểu diễn tập $(A \\cap B) \\setminus C$."
        },
        {
            id: 20,
            type: "multiple_choice",
            question: "Dùng kí hiệu khoảng, đoạn để viết lại tập hợp sau: $B = \\left\\{x \\in \\mathbb{R} \\mid -\\frac{1}{2} < x \\le 3\\right\\}$.",
            imageKey: "img_20",
            options: [
                "$B = \\left[-\\frac{1}{2}; 3\\right)$",
                "$B = \\left(-\\frac{1}{2}; 3\\right]$",
                "$B = \\left[-\\frac{1}{2}; 3\\right]$",
                "$B = \\left(-\\frac{1}{2}; 3\\right)$"
            ],
            correct: 1,
            explanation: "Tập hợp B gồm các số thực lớn hơn $-\\frac{1}{2}$ và nhỏ hơn hoặc bằng $3$, được viết là $\\left(-\\frac{1}{2}; 3\\right]$."
        },
        {
            id: 21,
            type: "multiple_choice",
            question: "Cho tập hợp $X = \\{1;5\\}, Y = \\{1;3;5\\}$. Tập $X \\cap Y$ là tập hợp nào sau đây?",
            imageKey: "img_21",
            options: [
                "$\\{1\\}$",
                "$\\{1;3\\}$",
                "$\\{1;3;5\\}$",
                "$\\{1;5\\}$"
            ],
            correct: 3,
            explanation: "Phần tử chung của hai tập là 1 và 5, vậy $X \\cap Y = \\{1;5\\}$."
        },
        {
            id: 22,
            type: "multiple_choice",
            question: "Tập $(-\\infty; -3) \\cap [-5; 2)$ bằng",
            imageKey: "img_22",
            options: [
                "$[-5; -3)$.",
                "$(-\\infty; -5]$.",
                "$(-\\infty; -2)$.",
                "$(-3; -2)$."
            ],
            correct: 0,
            explanation: "Giao của hai khoảng là các số thực $x$ thỏa mãn $-5 \\le x < -3$, tức là khoảng $[-5; -3)$."
        },
        {
            id: 23,
            type: "multiple_choice",
            question: "Cho $A = (-\\infty; 5], B = (0; +\\infty)$. Tìm $A \\cap B$.",
            imageKey: "img_23",
            options: [
                "$A \\cap B = [0; 5)$.",
                "$A \\cap B = (0; 5)$.",
                "$A \\cap B = (0; 5]$.",
                "$A \\cap B = (-\\infty; +\\infty)$."
            ],
            correct: 2,
            explanation: "Giao của hai tập hợp là phần thỏa mãn đồng thời $x > 0$ và $x \\le 5$, tức là $(0; 5]$."
        },
        {
            id: 24,
            type: "multiple_choice",
            question: "Cho các tập hợp $M = [-3; 6]$ và $N = (-\\infty; -2) \\cup (3; +\\infty)$. Khi đó $M \\cap N$ là",
            imageKey: "img_24",
            options: [
                "$(-\\infty; -2) \\cup [3; 6]$.",
                "$(-\\infty; -2) \\cup [3; +\\infty)$.",
                "$[-3; -2) \\cup (3; 6]$.",
                "$(-3; -2) \\cup (3; 6)$."
            ],
            correct: 2,
            explanation: "Kết hợp trên trục số ta được $M \\cap N = [-3; -2) \\cup (3; 6]$."
        },
        {
            id: 25,
            type: "multiple_choice",
            question: "Hình vẽ sau đây là biểu diễn của tập hợp nào?",
            imageKey: "img_25",
            options: [
                "$(-\\infty; -2) \\cup [5; +\\infty)$.",
                "$(-\\infty; -2) \\cup (5; +\\infty)$.",
                "$(-\\infty; -2) \\cup (5; +\\infty]$.",
                "$(-\\infty; -2] \\cup [5; +\\infty)$."
            ],
            correct: 0,
            explanation: "Phần không gạch là $(-\\infty; -2) \\cup [5; +\\infty)$, với $-2$ là ngoặc tròn, và $5$ là ngoặc vuông."
        },
        {
            id: 26,
            type: "multiple_choice",
            question: "Cho tập hợp $X = \\{a;b\\}, Y = \\{a;b;c\\}$. $X \\cup Y$ là tập hợp nào sau đây?",
            imageKey: "img_26",
            options: [
                "$\\{a;b;c;d\\}$",
                "$\\{a;b\\}$",
                "$\\{c\\}$",
                "$\\{a;b;c\\}$"
            ],
            correct: 3,
            explanation: "$X \\cup Y = \\{a;b;c\\}$ vì chứa toàn bộ các phần tử thuộc X hoặc thuộc Y."
        },
        {
            id: 27,
            type: "multiple_choice",
            question: "Kết quả của $[-4; 1) \\cup (-2; 3]$ là",
            imageKey: "img_27",
            options: [
                "$(-2; 1)$",
                "$[-4; 3]$",
                "$(-4; 2]$",
                "$(1; 3]$"
            ],
            correct: 1,
            explanation: "Hợp của hai khoảng là đoạn từ điểm nhỏ nhất là $-4$ đến lớn nhất là $3$, liên tục nên là $[-4; 3]$."
        },
        {
            id: 28,
            type: "multiple_choice",
            question: "Cho hai tập hợp $A = (-3; 3)$ và $B = (0; +\\infty)$. Tìm $A \\cup B$.",
            imageKey: "img_28",
            options: [
                "$A \\cup B = (-3; +\\infty)$.",
                "$A \\cup B = [-3; +\\infty)$.",
                "$A \\cup B = [-3; 0)$.",
                "$A \\cup B = (0; 3)$."
            ],
            correct: 0,
            explanation: "Ta lấy tất cả các phần tử thuộc A hoặc B. $A \\cup B = (-3; +\\infty)$."
        },
        {
            id: 29,
            type: "multiple_choice",
            question: "Cho $A = (2; +\\infty), B = (m; +\\infty)$. Điều kiện cần và đủ của $m$ sao cho $B$ là tập con của $A$ là",
            imageKey: "img_29",
            options: [
                "$m \\le 2$.",
                "$m = 2$.",
                "$m > 2$.",
                "$m \\ge 2$."
            ],
            correct: 3,
            explanation: "Để $B \\subset A$, ta cần $(m; +\\infty) \\subset (2; +\\infty) \\Leftrightarrow m \\ge 2$."
        },
        {
            id: 30,
            type: "multiple_choice",
            question: "Cho số thực $a < 0$. Điều kiện cần và đủ để $(-\\infty; 9a) \\cap \\left(\\frac{4}{a}; +\\infty\\right) \\ne \\emptyset$ là:",
            imageKey: "img_30",
            options: [
                "$-\\frac{3}{4} \\le a < 0$.",
                "$-\\frac{2}{3} < a < 0$.",
                "$-\\frac{2}{3} \\le a < 0$.",
                "$-\\frac{3}{4} < a < 0$."
            ],
            correct: 1,
            explanation: "Để hai khoảng giao nhau khác rỗng thì $\\frac{4}{a} < 9a$. Do $a < 0$, nhân hai vế với a sẽ đảo chiều bất phương trình thành $4 > 9a^2 \\Leftrightarrow a^2 < \\frac{4}{9} \\Leftrightarrow -\\frac{2}{3} < a < \\frac{2}{3}$. Kết hợp với $a < 0$, ta được $-\\frac{2}{3} < a < 0$."
        },
        {
            id: 31,
            type: "multiple_choice",
            question: "Cho tập $X = \\{2;4;6;9\\}, Y = \\{1;2;3;4\\}$. Tập nào sau đây bằng tập $X \\setminus Y$?",
            imageKey: "img_31",
            options: [
                "$\\{1;2;3;5\\}$",
                "$\\{1;3;6;9\\}$",
                "$\\{6;9\\}$",
                "$\\{1\\}$"
            ],
            correct: 2,
            explanation: "Tập hợp $X \\setminus Y$ là tập các phần tử thuộc X nhưng không thuộc Y. $X \\setminus Y = \\{6;9\\}$."
        },
        {
            id: 32,
            type: "multiple_choice",
            question: "Cho $A = (-\\infty; 2]$ và $B = (0; +\\infty)$. Tìm $A \\setminus B$.",
            imageKey: "img_32",
            options: [
                "$A \\setminus B = (-\\infty; 0]$.",
                "$A \\setminus B = (2; +\\infty)$.",
                "$A \\setminus B = (0; 2]$.",
                "$A \\setminus B = (-\\infty; 0)$."
            ],
            correct: 0,
            explanation: "Bỏ đi phần tử của B ra khỏi A, ta còn lại phần từ $0$ trở xuống (vì $0 \\notin B$ nên sẽ nằm trong $A \\setminus B$). Vậy $A \\setminus B = (-\\infty; 0]$."
        },
        {
            id: 33,
            type: "multiple_choice",
            question: "Cho hai tập hợp $X = \\{1;2;3;4\\}, Y = \\{1;2\\}$. $C_X Y$ là tập hợp sau đây?",
            imageKey: "img_33",
            options: [
                "$\\{1;2\\}$",
                "$\\{1;2;3;4\\}$",
                "$\\{3;4\\}$",
                "$\\emptyset$"
            ],
            correct: 2,
            explanation: "$C_X Y$ chính là phần bù của Y trong X, tức là $X \\setminus Y = \\{3;4\\}$."
        },
        {
            id: 34,
            type: "multiple_choice",
            question: "Phần bù của $[-2; 1)$ trong $\\mathbb{R}$ là",
            imageKey: "img_34",
            options: [
                "$(-\\infty; 1]$.",
                "$(-\\infty; -2) \\cup [1; +\\infty)$.",
                "$(-\\infty; -2)$.",
                "$(2; +\\infty)$."
            ],
            correct: 1,
            explanation: "$C_{\\mathbb{R}}[-2; 1) = \\mathbb{R} \\setminus [-2; 1) = (-\\infty; -2) \\cup [1; +\\infty)$."
        },
        {
            id: 35,
            type: "multiple_choice",
            question: "Tìm mệnh đề sai.",
            imageKey: "img_35",
            options: [
                "$A \\setminus \\emptyset = \\emptyset$, với mọi tập $A$.",
                "$A \\cup \\emptyset = A$, với mọi tập $A$.",
                "$A \\cap \\emptyset = \\emptyset$, với mọi tập $A$.",
                "$A \\cap A = A$, với mọi tập $A$."
            ],
            correct: 0,
            explanation: "Mệnh đề sai là A. Đúng phải là $A \\setminus \\emptyset = A$."
        },
        {
            id: 36,
            type: "multiple_choice",
            question: "Một lớp học có 25 học sinh giỏi môn Toán, 23 học sinh giỏi môn Lý, 14 học sinh giỏi cả môn Toán và Lý và có 6 học sinh không giỏi môn nào cả. Hỏi lớp đó có bao nhiêu học sinh?",
            imageKey: "img_36",
            options: [
                "54",
                "40",
                "26",
                "68"
            ],
            correct: 1,
            explanation: "Số học sinh giỏi ít nhất một môn là $25 + 23 - 14 = 34$. Tổng số học sinh cả lớp là $34 + 6 = 40$."
        },
        {
            id: 37,
            type: "multiple_choice",
            question: "Lớp 10A có 45 học sinh trong đó có 25 em học giỏi môn Toán, 23 em học giỏi môn Lý, 20 em học giỏi môn Hóa, 11 em học giỏi cả môn Toán và môn Lý, 8 em học giỏi cả môn Lý và môn Hóa, 9 em học giỏi cả môn Toán và môn Hóa. Hỏi lớp 10A có bao nhiêu bạn học giỏi cả ba môn Toán, Lý, Hóa, biết rằng mỗi học sinh trong lớp học giỏi ít nhất một trong 3 môn Toán, Lý, Hóa?",
            imageKey: "img_37",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 2,
            explanation: "Theo công thức tập hợp: $N = n(T) + n(L) + n(H) - n(T \\cap L) - n(L \\cap H) - n(T \\cap H) + n(T \\cap L \\cap H)$. Ta có $45 = 25 + 23 + 20 - 11 - 8 - 9 + x \\Leftrightarrow 45 = 40 + x \\Leftrightarrow x = 5$."
        },

        // ==================== PHẦN 2. TRẮC NGHIỆM ĐÚNG SAI (CÂU 38 - CÂU 39) ====================
        {
            id: 38,
            type: "true_false",
            question: "Xét tính đúng, sai của các mệnh đề:",
            imageKey: "img_38",
            statements: [
                { id: "a", statement: "$\\forall x \\in \\mathbb{R}, x^2 + 1 \\ge 0$", correct: true },
                { id: "b", statement: "$\\forall x \\in \\mathbb{R}, x + 2 = x$", correct: false },
                { id: "c", statement: "$\\exists x \\in \\mathbb{Q}, 9x^2 - 4 = 0$", correct: true },
                { id: "d", statement: "$\\forall x \\in \\mathbb{Q}, 3x^2 - 5 = 0$", correct: false }
            ],
            explanation: "a) Đúng vì $x^2 \\ge 0$. b) Sai vì $2 = 0$ vô lý. c) Đúng vì $x = \\pm 2/3 \\in \\mathbb{Q}$. d) Sai vì phương trình có nghiệm vô tỉ và không thể đúng với mọi x."
        },
        {
            id: 39,
            type: "true_false",
            question: "Cho các tập hợp $A = \\{0;2;3;5\\}$, $B = \\{-1;2;4;5;6\\}$, $C = \\{-2;0;1;3;4\\}$. Xét tính đúng sai của các mệnh đề sau:",
            imageKey: "img_39",
            statements: [
                { id: "a", statement: "$A \\cap B = \\{2;5\\}$", correct: true },
                { id: "b", statement: "$A \\cup B = \\{-1;0;2;3;5;6\\}$", correct: false },
                { id: "c", statement: "$B \\cap C = \\{2;3;4\\}$", correct: false },
                { id: "d", statement: "$B \\cup C = \\{-2;-1;0;1;2;3;4;5;6\\}$", correct: true }
            ],
            explanation: "a) Đúng. b) Sai vì thiếu phần tử 4. c) Sai vì B và C chỉ giao nhau tại $\{2;4\}$, phần tử 3 không thuộc B. d) Đúng."
        },

        // ==================== PHẦN 3. TRẢ LỜI NGẮN (CÂU 40 - CÂU 44) ====================
        {
            id: 40,
            type: "short_answer",
            question: "Cho hai tập hợp khác rỗng $A = (m-1; 4]$ và $B = (-2; 2m+2), m \\in \\mathbb{R}$. Có bao nhiêu giá trị nguyên dương của tham số $m$ để $A \\cap B \\ne \\emptyset$.",
            imageKey: "img_40",
            correctAnswer: "4",
            explanation: "Để A, B khác rỗng ta cần $m-1 < 4 \\Rightarrow m < 5$ và $-2 < 2m+2 \\Rightarrow m > -2$. Vậy $m \\in (-2; 5)$. Để $A \\cap B = \\emptyset$ thì $2m+2 \\le m-1 \\Leftrightarrow m \\le -3$. Do đó $A \\cap B \\ne \\emptyset$ khi $m > -3$. Kết hợp lại ta được $-2 < m < 5$. Các giá trị nguyên dương là $1, 2, 3, 4$ (tổng cộng 4 giá trị)."
        },
        {
            id: 41,
            type: "short_answer",
            question: "Lớp 10A1 có 40 học sinh, trong đó có 20 học sinh thích môn Ngữ Văn, 18 học sinh thích môn Toán, 4 học sinh thích cả hai môn Ngữ Văn và Toán. Hỏi có bao nhiêu học sinh không thích môn nào trong hai môn Ngữ Văn và Toán?",
            imageKey: "img_41",
            correctAnswer: "6",
            explanation: "Số học sinh thích ít nhất 1 trong 2 môn là: $20 + 18 - 4 = 34$. Số học sinh không thích môn nào là $40 - 34 = 6$."
        },
        {
            id: 42,
            type: "essay",
            question: "Cho tập hợp $A = [-3; 1) \\cup (0; 2026)$. Tập hợp $A$ có bao nhiêu giá trị nguyên?",
            imageKey: "img_42",
            correctAnswer: "2029",
            explanation: "Ta có hợp của hai khoảng là $[-3; 2026)$. Các giá trị nguyên thuộc A bao gồm $-3, -2, -1, ..., 2025$. Số lượng giá trị nguyên là $2025 - (-3) + 1 = 2029$."
        },
        {
            id: 43,
            type: "essay",
            question: "Cho các tập hợp $A = \\{x \\in \\mathbb{Z} \\mid |x| < 3\\}$, $B = \\{0; 1; 3\\}$, $C = \\{x \\in \\mathbb{Z}^+ \\mid (x^2 - 4x + 3)(x^2 - 4) = 0\\}$. Tìm số phần tử của $(A \\setminus B) \\cup C$.",
            imageKey: "img_43",
            correctAnswer: "5",
            explanation: "Ta có $A = \\{-2; -1; 0; 1; 2\\}$, $B = \\{0; 1; 3\\}$, và $C = \\{1; 2; 3\\}$ (do $C$ chỉ lấy nghiệm nguyên dương). Suy ra $A \\setminus B = \\{-2; -1; 2\\}$. Hợp của $(A \\setminus B)$ và $C$ là $\\{-2; -1; 1; 2; 3\\}$, tập hợp này có 5 phần tử."
        },
        {
            id: 44,
            type: "essay",
            question: "Cho tập hợp $A = \\{3; 5\\}$ và $B = \\{1; 2; 3; 4; 5\\}$. Có tất cả bao nhiêu tập $X$ thỏa mãn: $A \\subset X \\subset B$?",
            imageKey: "img_44",
            correctAnswer: "8",
            explanation: "Vì $X$ chứa $A$, nên phần tử $3, 5$ bắt buộc thuộc $X$. Các phần tử còn lại của $X$ có thể được lấy từ tập $B \\setminus A = \\{1; 2; 4\\}$. Số tập con của tập 3 phần tử là $2^3 = 8$. Do đó có 8 tập hợp $X$ thỏa mãn."
        }
    ]
};