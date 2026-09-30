export const courses = [
 { id: 1, title: "Advanced Python for Data Analytics", cat: "Data", level: "Advanced", lessons: 12, progress: 65, rating: 4.8, hrs: 18 },
 { id: 2, title: "Machine Learning Foundations", cat: "AI", level: "Intermediate", lessons: 10, progress: 30, rating: 4.7, hrs: 14 },
 { id: 3, title: "Cloud Infrastructure Basics", cat: "Cloud", level: "Beginner", lessons: 8, progress: 90, rating: 4.6, hrs: 9 },
 { id: 4, title: "Cybersecurity Essentials", cat: "Security", level: "Intermediate", lessons: 9, progress: 0, rating: 4.5, hrs: 11 },
 { id: 5, title: "Leadership in Public Service", cat: "Management", level: "Beginner", lessons: 6, progress: 0, rating: 4.9, hrs: 6 },
 { id: 6, title: "SQL & Data Warehousing", cat: "Data", level: "Intermediate", lessons: 11, progress: 12, rating: 4.4, hrs: 13 },
];
export const lessons = ["Welcome & Setup", "NumPy Essentials", "Pandas DataFrames", "Cleaning Messy Data", "Visualization", "Intro to Modeling"];
export const questions = [
 { q: "Which library is primarily used for DataFrames in Python?", o: ["NumPy", "Pandas", "Flask", "Pytest"], a: 1 },
 { q: "What does df.dropna() do?", o: ["Fills nulls", "Drops columns", "Removes rows with nulls", "Sorts data"], a: 2 },
 { q: "Which is a supervised learning algorithm?", o: ["K-Means", "PCA", "Linear Regression", "DBSCAN"], a: 2 },
 { q: "Which plot best shows a distribution?", o: ["Histogram", "Pie", "Sankey", "Gantt"], a: 0 },
 { q: "Output of len([1,2,3])?", o: ["2", "3", "4", "Error"], a: 1 },
];
export const required: Record<string, number> = { Python: 4, "Data Analytics": 4, Pandas: 3, "Machine Learning": 2 };
export const trainers = [
 { name: "Dr. Ananya Rao", role: "Data Science Lead, IISc", match: 92, exp: 11, rating: 4.9, avail: "Available now", skills: { Python: 5, "Data Analytics": 4, Pandas: 4, "Machine Learning": 3 } },
 { name: "Rahul Mehta", role: "Sr. Analyst, NIC", match: 86, exp: 8, rating: 4.7, avail: "From Mon", skills: { Python: 4, "Data Analytics": 4, Pandas: 3, "Machine Learning": 1 } },
 { name: "Prof. Kavita Nair", role: "ML Researcher, IIT Madras", match: 81, exp: 14, rating: 4.8, avail: "Limited slots", skills: { Python: 4, "Data Analytics": 3, Pandas: 3, "Machine Learning": 4 } },
 { name: "Arjun Sharma", role: "Python Instructor", match: 74, exp: 6, rating: 4.5, avail: "Available now", skills: { Python: 4, "Data Analytics": 2, Pandas: 4, "Machine Learning": 2 } },
 { name: "Sneha Iyer", role: "BI Consultant", match: 68, exp: 5, rating: 4.4, avail: "Next week", skills: { Python: 3, "Data Analytics": 4, Pandas: 2, "Machine Learning": 1 } },
] as { name: string; role: string; match: number; exp: number; rating: number; avail: string; skills: Record<string, number> }[];
export const monthly = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m, i) => ({ m, learners: 400 + i * 130 + (i % 2) * 60, certs: 120 + i * 55, hours: 900 + i * 210 }));
export const cats = [{ n: "Data", v: 34 }, { n: "AI", v: 26 }, { n: "Cloud", v: 18 }, { n: "Security", v: 12 }, { n: "Mgmt", v: 10 }];
export const learners = [["Priya Singh", 82], ["Amit Verma", 64], ["Neha Kapoor", 91], ["Rohan Das", 47]] as [string, number][];
