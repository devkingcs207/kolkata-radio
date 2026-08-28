export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /**
   * TODO — fill in the real YouTube video ID for each track before shipping.
   * Only use IDs from videos you have the right to use (your own uploads,
   * or the rights holder's own official channel with embedding enabled).
   * This file intentionally ships with placeholders — see README.md.
   */
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  subtitle: string;
  bg: string;
  tracks: Track[];
};

// Purono Kolkata — Old Hindi Classics (1970s-1990s)
const purono: Track[] = [
  { id: "p01", title: "Yeh Shaam Mastani", artist: "Kishore Kumar", film: "Kati Patang", year: 1971, videoId: "lbfWsIpXsCA" },
  { id: "p02", title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", film: "Mere Jeevan Saathi", year: 1972, videoId: "-Px0efU00uQ" },
  { id: "p03", title: "Musafir Hoon Yaaron", artist: "Kishore Kumar", film: "Parichay", year: 1972, videoId: "cHLgOcsngTI" },
  { id: "p04", title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", film: "Blackmail", year: 1973, videoId: "AMuRRXCuy-4" },
  { id: "p05", title: "Chura Liya Hai Tumne Jo Dil Ko", artist: "Asha Bhosle, Mohammed Rafi", film: "Yaadon Ki Baaraat", year: 1973, videoId: "seFeZOgyFsc" },
  { id: "p06", title: "Zindagi Ke Safar Mein", artist: "TODO: singer", film: "Aap Ki Kasam", year: 1974, videoId: "TODO" },
  { id: "p07", title: "Ek Ajnabee Haseena Se", artist: "TODO: singer", film: "Ajnabee", year: 1974, videoId: "TODO" },
  { id: "p08", title: "Tere Bina Zindagi Se", artist: "TODO: singer", film: "Aandhi", year: 1975, videoId: "TODO" },
  { id: "p09", title: "Mere Naina Sawan Bhadon", artist: "TODO: singer", film: "Mehbooba", year: 1976, videoId: "TODO" },
  { id: "p10", title: "Naam Goom Jayega", artist: "TODO: singer", film: "Kinara", year: 1977, videoId: "TODO" },
  { id: "p11", title: "Kya Hua Tera Wada", artist: "TODO: singer", film: "Hum Kisise Kum Naheen", year: 1977, videoId: "TODO" },
  { id: "p12", title: "Dream Girl", artist: "TODO: singer", film: "Dream Girl", year: 1977, videoId: "TODO" },
  { id: "p13", title: "Do Lafzon Ki Hai Dil Ki Kahani", artist: "TODO: singer", film: "The Great Gambler", year: 1979, videoId: "TODO" },
  { id: "p14", title: "Rimjhim Gire Saawan", artist: "TODO: singer", film: "Manzil", year: 1979, videoId: "TODO" },
  { id: "p15", title: "Om Shanti Om", artist: "TODO: singer", film: "Karz", year: 1980, videoId: "TODO" },
  { id: "p16", title: "Humein Tumse Pyaar Kitna", artist: "TODO: singer", film: "Kudrat", year: 1981, videoId: "TODO" },
  { id: "p17", title: "Tu Tu Hai Wahi", artist: "TODO: singer", film: "Yeh Vaada Raha", year: 1982, videoId: "TODO" },
  { id: "p18", title: "Neele Neele Ambar Par", artist: "TODO: singer", film: "Kalaakaar", year: 1983, videoId: "TODO" },
  { id: "p19", title: "Har Kisi Ko Nahin Milta", artist: "TODO: singer", film: "Jaanbaaz", year: 1986, videoId: "TODO" },
  { id: "p20", title: "Zooby Zooby", artist: "TODO: singer", film: "Dance Dance", year: 1987, videoId: "TODO" },
  { id: "p21", title: "Papa Kehte Hain", artist: "TODO: singer", film: "Qayamat Se Qayamat Tak", year: 1988, videoId: "TODO" },
  { id: "p22", title: "Akele Hain To Kya Gham Hai", artist: "TODO: singer", film: "Qayamat Se Qayamat Tak", year: 1988, videoId: "TODO" },
  { id: "p23", title: "Gazab Ka Hai Din", artist: "TODO: singer", film: "Qayamat Se Qayamat Tak", year: 1988, videoId: "TODO" },
  { id: "p24", title: "Ek Do Teen", artist: "TODO: singer", film: "Tezaab", year: 1988, videoId: "TODO" },
  { id: "p25", title: "Chandni O Meri Chandni", artist: "TODO: singer", film: "Chandni", year: 1989, videoId: "TODO" },
  { id: "p26", title: "Ab Tere Bin", artist: "TODO: singer", film: "Aashiqui", year: 1990, videoId: "TODO" },
  { id: "p27", title: "Bahut Pyar Karte Hain", artist: "TODO: singer", film: "Saajan", year: 1991, videoId: "TODO" },
  { id: "p28", title: "Pehla Nasha", artist: "TODO: singer", film: "Jo Jeeta Wohi Sikandar", year: 1992, videoId: "TODO" },
  { id: "p29", title: "Jaadu Teri Nazar", artist: "TODO: singer", film: "Darr", year: 1993, videoId: "TODO" },
  { id: "p30", title: "Ek Ladki Ko Dekha", artist: "TODO: singer", film: "1942: A Love Story", year: 1994, videoId: "TODO" },
  { id: "p31", title: "Tip Tip Barsa Paani", artist: "TODO: singer", film: "Mohra", year: 1994, videoId: "TODO" },
  { id: "p32", title: "Tujhe Dekha To", artist: "TODO: singer", film: "Dilwale Dulhania Le Jayenge", year: 1995, videoId: "TODO" },
  { id: "p33", title: "Tu Hi Re", artist: "TODO: singer", film: "Bombay", year: 1995, videoId: "TODO" },
  { id: "p34", title: "Bahon Ke Darmiyan", artist: "TODO: singer", film: "Khamoshi: The Musical", year: 1996, videoId: "TODO" },
  { id: "p35", title: "Do Dil Mil Rahe Hain", artist: "TODO: singer", film: "Pardes", year: 1997, videoId: "TODO" },
  { id: "p36", title: "Kuch Kuch Hota Hai", artist: "TODO: singer", film: "Kuch Kuch Hota Hai", year: 1998, videoId: "TODO" },
  { id: "p37", title: "Chaiyya Chaiyya", artist: "TODO: singer", film: "Dil Se..", year: 1998, videoId: "TODO" },
  { id: "p38", title: "Satrangi Re", artist: "TODO: singer", film: "Dil Se..", year: 1998, videoId: "TODO" },
  { id: "p39", title: "Aankhon Se Tune Kya Keh Diya", artist: "TODO: singer", film: "Ghulam", year: 1998, videoId: "TODO" },
];

// Notun Kolkata — Bengali Arijit Singh Hits (2010-2026)
const notun: Track[] = [
  { id: "n01", title: "Amader Surya", artist: "Arijit Singh", film: "Egaro", year: 2011, videoId: "TODO" },
  { id: "n02", title: "Golemale", artist: "Arijit Singh", film: "3 Kanya", year: 2012, videoId: "TODO" },
  { id: "n03", title: "Bojhena Shey Bojhena", artist: "Arijit Singh", film: "Bojhena Shey Bojhena", year: 2012, videoId: "TODO" },
  { id: "n04", title: "Na Re Na", artist: "Arijit Singh", film: "Bojhena Shey Bojhena", year: 2012, videoId: "TODO" },
  { id: "n05", title: "Sajna (Reprise)", artist: "Arijit Singh", film: "Bojhena Shey Bojhena", year: 2012, videoId: "TODO" },
  { id: "n06", title: "Mon Baware", artist: "Arijit Singh", film: "Kanamachi", year: 2013, videoId: "TODO" },
  { id: "n07", title: "Tomaye Amaye Mile", artist: "Arijit Singh", film: "Tomay Amay Mile", year: 2013, videoId: "TODO" },
  { id: "n08", title: "Ki Kore Toke Bolbo", artist: "Arijit Singh", film: "Rangbaaz", year: 2013, videoId: "TODO" },
  { id: "n09", title: "Egiye De", artist: "Arijit Singh", film: "Shudhu Tomari Jonyo", year: 2015, videoId: "TODO" },
  { id: "n10", title: "Parbona Ami Charte Toke", artist: "Arijit Singh", film: "Parbona Ami Charte Toke", year: 2015, videoId: "TODO" },
  { id: "n11", title: "Thik Emon Ebhabe", artist: "Arijit Singh", film: "Gangster", year: 2016, videoId: "TODO" },
  { id: "n12", title: "Tomake Chai", artist: "Arijit Singh", film: "Gangster", year: 2016, videoId: "1f18irP--O8" },
  { id: "n13", title: "Tomake Chuey Dilam", artist: "Arijit Singh", film: "Bastu Shaap", year: 2016, videoId: "TODO" },
  { id: "n14", title: "Phiriye Dao Cinemahall", artist: "Arijit Singh", film: "Cinemawala", year: 2016, videoId: "TODO" },
  { id: "n15", title: "Ar Kono Kotha Na Bole", artist: "Arijit Singh", film: "Shikari", year: 2016, videoId: "TODO" },
  { id: "n16", title: "Naam Na Jana Pakhi", artist: "Arijit Singh", film: "Ka Kha Ga Gha", year: 2018, videoId: "TODO" },
  { id: "n17", title: "Akasheo Alpo Neel", artist: "Arijit Singh", film: "Kabir", year: 2018, videoId: "O7CISHZ4AX8" },
  { id: "n18", title: "Hoye Jetey Paari", artist: "Arijit Singh", film: "Fidaa", year: 2018, videoId: "2Ey4epZA27o" },
  { id: "n19", title: "Ke Ami Kothay", artist: "Arijit Singh", film: "Ek Je Chhilo Raja", year: 2018, videoId: "TODO" },
  { id: "n20", title: "Tomar Pasher Desh", artist: "Arijit Singh", film: "Bijoya", year: 2019, videoId: "TODO" },
  { id: "n21", title: "Bishonno Chimney", artist: "Arijit Singh", film: "Bornoporichoy", year: 2019, videoId: "TODO" },
  { id: "n22", title: "Maa", artist: "Arijit Singh", film: "Gotro", year: 2019, videoId: "TODO" },
  { id: "n23", title: "Abar Phire Ele", artist: "Arijit Singh", film: "Dwitiyo Purush", year: 2020, videoId: "Nx3_kpcRxJg" },
  { id: "n24", title: "Aye Dekhe Jaa", artist: "Arijit Singh", film: "Love Aaj Kal Porshu", year: 2020, videoId: "zVB_cJR0248" },
  { id: "n25", title: "Bhalobashar Morshum", artist: "Arijit Singh", film: "X=Prem", year: 2022, videoId: "9T3SypTYidg" },
  { id: "n26", title: "Keu Jaane Naa", artist: "Arijit Singh", film: "Raavan", year: 2022, videoId: "TODO" },
  { id: "n27", title: "Bismillah", artist: "Arijit Singh", film: "Bismillah", year: 2022, videoId: "TODO" },
  { id: "n28", title: "Jiya Tui Chara", artist: "Arijit Singh", film: "Biye Bibhrat", year: 2023, videoId: "0x0_rLGId3Y" },
  { id: "n29", title: "Ghono Megher Elokeshe", artist: "Arijit Singh", film: "Biye Bibhrat", year: 2023, videoId: "TODO" },
  { id: "n30", title: "Ashbo Phire", artist: "Arijit Singh", film: "Bagha Jatin", year: 2023, videoId: "TODO" },
  { id: "n31", title: "Baundule Ghuri", artist: "Arijit Singh", film: "Dawshom Awbotaar", year: 2023, videoId: "3Y46v1ymdfQ" },
  { id: "n32", title: "Bhabo Jodi", artist: "Arijit Singh", film: "Kabuliwala", year: 2023, videoId: "TODO" },
  { id: "n33", title: "Keu Janbe Na", artist: "Arijit Singh", film: "Ajogyo", year: 2024, videoId: "TODO" },
  { id: "n34", title: "Gaane Gaane", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },
  { id: "n35", title: "Golpo Holo Shuru", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },
  { id: "n36", title: "Boba Raat", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },
  { id: "n37", title: "Khela Shesh", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },
  { id: "n38", title: "Nei Khoti Nei", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },
  { id: "n39", title: "Samantaral", artist: "Arijit Singh", film: "Bengali release", year: 2025, videoId: "TODO" },

 { id: "n40", title: "Oi Sagar Pare Aishya Amar", artist: "Tasrif Khan", film: "Single", year: 2021, videoId: "fdEu2zHRMIc" },

];

export const playlists: Playlist[] = [
  {
    id: "purono",
    name: "Purono Kolkata",
    subtitle: "Old Hindi Classics · 1970s–1990s",
    bg: "/bg/purono-kolkata.png",
    tracks: purono,
  },
  {
    id: "notun",
    name: "Notun Kolkata",
    subtitle: "Bengali Arijit Singh Hits · 2010–2026",
    bg: "/bg/notun-kolkata.png",
    tracks: notun,
  },
];
