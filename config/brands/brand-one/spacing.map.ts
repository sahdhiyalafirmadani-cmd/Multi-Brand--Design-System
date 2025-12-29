
export const brandOneSpacing = {
  gap: {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
  },

  paddingX: {
    1: "px-1",
    2: "px-2",
    3: "px-3",
    4: "px-4",
    5: "px-5",
    6: "px-6",
  },

  paddingY: {
    1: "py-1",
    2: "py-2",
    3: "py-3",
    4: "py-4",
    5: "py-5",
    6: "py-6",
  },

  marginX: {
    1: "mx-1",
    2: "mx-2",
    3: "mx-3",
    4: "mx-4",
  },

  marginY: {
    1: "my-1",
    2: "my-2",
    3: "my-3",
    4: "my-4",
  },

  

  sections: {
    // BANNER SPACING
      banner: {
      heightMobile: "280px",     
      heightTablet: "380px",   
      heightLaptop: "500px",     
      heightDesktop: "600px",    
      contentGap: "gap-4",
      contentPadding: "p-4",
      slideInterval: 4000,      
      transitionDuration: 1000,  
    },

    // ABOUT SECTION SPACING
about: {
  // Section padding
  sectionPaddingMobile: "py-10 px-4",
  sectionPaddingDesktop: "py-20 md:px-10",

  // Max width for the container
  containerMaxWidth: "max-w-7xl",

  // Gap between image and text
  containerGap: "gap-8 md:gap-16",

  // Image — left side
  imageWidthMobile: "w-full",
  imageWidthDesktop: "md:w-1/2",
  imageHeightMobile: "h-64",
  imageHeightDesktop: "md:h-[420px]",

  // Text container — right side
  textContainerWidthMobile: "w-full",
  textContainerWidthDesktop: "md:w-1/2",

  // Heading
  headingSizeMobile: "text-2xl",
  headingSizeDesktop: "md:text-3xl",
  headingWeight: "font-semibold",
  headingMarginBottom: "mb-4",

  // Paragraph
  paragraphSizeMobile: "text-base",
  paragraphSizeDesktop: "md:text-sm",
  paragraphMarginBottom: "mb-6",
  paragraphLineHeight: "leading-relaxed",

  // Button
  buttonGap: "gap-4",
},



       chairman: {
      sectionPaddingMobile: "py-16 px-6",
      sectionPaddingDesktop: "md:py-20 md:px-10",
      containerGap: "gap-12",
      headingSizeMobile: "text-3xl",
      headingSizeDesktop: "md:text-4xl",
      headingWeight: "font-bold",
      headingMarginBottom: "mb-6",
      paragraphLineHeight: "leading-7",
      paragraphMarginBottom: "mb-8",
       imageWidth: 450,
      imageHeight: 500,
      buttonGap: "mt-0",
    },

    achievements: {
      sectionPaddingMobile: "py-10",
      sectionPaddingDesktop: "py-10", 
      containerGap: "gap-8",

      // Heading
      headingSizeMobile: "text-3xl",
      headingSizeDesktop: "md:text-4xl",
      headingWeight: "font-bold",
      headingMarginBottom: "mb-8",
      headingTextAlign: "text-center",

      // Button
      buttonWidthMobile: "w-40",
      buttonWidthDesktop: "md:w-48",
    },

    managingDirector: {
  // Section padding
  sectionPaddingMobile: "py-16 px-6",
  sectionPaddingDesktop: "py-16 md:px-10",

  // Max width & container gap
  containerMaxWidth: "max-w-6xl",
  containerGap: "gap-12",

  // Heading
  headingSizeMobile: "text-3xl",
  headingSizeDesktop: "md:text-4xl",
  headingWeight: "font-bold",
  headingTextAlign: "text-center",
  headingMarginBottom: "mb-6",

  // Image — increase only height & width
  imageWidthMobile: "w-full",
  imageWidthDesktop: "md:w-1/2",      
  imageHeightMobile: "h-96",          
  imageHeightDesktop: "md:h-[550px]",  

  // Paragraph container — keep unchanged
  textContainerWidthMobile: "w-full",
  textContainerWidthDesktop: "md:w-1/2",
  paragraphLineHeight: "leading-7",

  // Gap between image and paragraph
  contentGap: "gap-8",
},

// spacing.map.ts
noticeBoard: {
  sectionPaddingMobile: "py-10",
  sectionPaddingDesktop: "md:py-16",

  headingSizeMobile: "text-3xl",
  headingSizeDesktop: "md:text-4xl",
  headingWeight: "font-bold",
  headingMarginBottom: "mb-6",
  headingTextAlign: "text-center",

  tableWidthMobile: "w-3/4",        
  tableWidthDesktop: "md:w-1/2",  
  tableCol1: "w-1/4",
  tableCol2: "w-1/2",
  tableCol3: "w-1/4",

  buttonWidthMobile: "w-40",
  buttonWidthDesktop: "md:w-48",
},

messageFromMadam: {
  sectionPaddingMobile: "py-12",
  sectionPaddingDesktop: "md:py-12",

  containerGap: "gap-8",

  imageWidthMobile: "w-full",
  imageWidthDesktop: "md:w-1/3",
  // Keep old image size exactly
  imageHeightMobile: "h-auto",
  imageHeightDesktop: "md:h-auto",

  textWidthMobile: "w-full",
  textWidthDesktop: "md:w-2/3",

  headingSizeMobile: "text-3xl",
  headingSizeDesktop: "md:text-3xl",
  headingWeight: "font-bold",
  headingMarginBottom: "mb-4",

  paragraphSizeMobile: "text-base",
  paragraphSizeDesktop: "md:text-lg",
  paragraphLineHeight: "leading-relaxed",
  paragraphMarginBottom: "mb-6",

  buttonWidthMobile: "w-40",
  buttonWidthDesktop: "md:w-48",
  buttonAlign: "flex justify-center md:justify-start",
},

   footerSection: {
      topSectionPadding: "py-12 px-6 md:px-12",
      bottomSectionPadding: "py-5",
      container: "container mx-auto",
      sectionGap: "gap-10",
      socialIconsGap: "flex gap-3 pt-2",
      linksGap: "space-y-3",
      logoSize: "w-28 h-auto",
      headingSize: "text-xl",
      headingWeight: "font-bold",
      linksHeadingSize: "text-lg sm:text-xl",
      linksHeadingWeight: "font-semibold",
      linksAlign: "text-center md:text-left",
      bottomTextSize: "text-sm",
      bottomTextAlign: "text-center",
      iconSize: "text-lg",
      messageHeadingSize: "text-lg sm:text-xl",
      messageHeadingWeight: "font-semibold",
    },


    //ABOUT PAGE 
 aboutBanner: {
  sectionPadding: "pt-0 pb-10 md:pb-16 lg:pb-20", 
  heightClasses: "h-[200px] sm:h-[200px] md:h-[200px] lg:h-[300px]",
},

 historySection: {
  sectionPadding: "pt-0 pb-16 px-6 md:pt-2 md:pb-16 md:px-10", 
  containerMaxWidth: "max-w-7xl",
  containerGap: "gap-8 md:gap-16",
  headingSize: "text-4xl md:text-4xl",
  headingWeight: "font-bold",
  headingMarginBottom: "mb-8",
  paragraphSize: "text-base md:text-sm",
  paragraphLineHeight: "leading-relaxed",
  paragraphMarginBottom: "mb-6",
  buttonWidth: "180px", 
  buttonAlign: "flex justify-center md:justify-start",
  imageWidth: "w-full md:w-1/2",
  imageHeight: "h-64 md:h-[400px]", 
  contentGap: "gap-8 md:gap-12",
},

 historyMontessoriSection: {
  sectionPadding: "py-16 px-6 md:py-16 md:px-10",
  containerMaxWidth: "max-w-7xl",
  containerGap: "gap-8 md:gap-16",

  // Heading & Paragraph sizes moved here for multi-brand
  headingSize: "text-4xl md:text-3xl lg:text-4xl", 
  headingMarginBottom: "mb-8",
  paragraphSize: "text-base md:text-sm",
  paragraphMarginBottom: "mb-6",

  // Button
  buttonWidth: "180px", 
  buttonAlign: "flex justify-center md:justify-start",

  // Image
  imageWidth: "w-full md:w-1/2",
  imageHeight: "h-64 md:h-[420px]",

  // Layout
  contentGap: "gap-8 md:gap-12",
},

ourValuesSection: {
  sectionPadding: "py-12 px-6 md:py-16",  
  containerMaxWidth: "max-w-7xl mx-auto",
  containerGap: "gap-6 md:gap-6",
  boxWidth: "w-full md:w-1/3",       
  boxPadding: "p-4 md:p-6",           
  boxGap: "space-y-3",
  boxBorderRadius: "rounded-xl",      
  headingFont: "text-2xl md:text-3xl font-bold underline",
  textFont: "text-base md:text-lg text-gray-600",

   logo: {
    opacity: 0.1,
    width: "80%",        
    height: "80%",       
    transition: "transform 0.3s ease",
  },
},

buildingCommitteeSection: {
  sectionPadding: "py-12 px-6 md:py-16",
  containerMaxWidth: "max-w-4xl",
  headingMarginBottom: "mb-8",
  headingFont: "text-3xl md:text-4xl font-bold underline",
  membersGap: "space-y-2 md:space-y-3 mt-4",
  memberFont: "text-lg md:text-xl font-semibold",
  sentenceMarginTop: "mt-6 md:mt-8",
},

foundingDirectorSection: {
  sectionPadding: "py-12 px-6 md:py-20",
  containerMaxWidth: "max-w-6xl",
  headingFont: "text-3xl md:text-4xl font-bold ",
  headingMarginBottom: "mb-10",

  contentGap: "gap-8 md:gap-16",

  imageWrapper: "w-full md:w-[30%] flex justify-center",
  imageStyle: "w-full h-auto",

  textWrapper: "w-full md:w-[70%] text-justify",
},

financeDirectorSection: {
  sectionPadding: "py-12 px-6 md:py-20",
  containerMaxWidth: "max-w-6xl",

  headingFont: "text-3xl md:text-4xl font-bold ",
  headingMarginBottom: "mb-10",

  contentGap: "gap-8 md:gap-16",

  imageWrapper: "w-full md:w-[40%] flex justify-center",
  imageStyle: "w-full h-auto",

  textWrapper: "w-full md:w-[70%] text-justify",
},

    //ACHIEVEMENTS PAGE 
achievementsBanner: {
  sectionPadding: "pt-0 pb-10 md:pb-16 lg:pb-10",

  imageWrapper: "w-full",
  image:
    "w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] object-cover",
},

achievementsAcademic: {
  sectionPadding: "py-6 md:py-10 lg:py-12",

  // Headings
  headingWrapper: "flex flex-col items-center text-center",
  headingGap: "gap-3",
  headingSize: "text-xl md:text-2xl lg:text-3xl",
  headingWeight: "font-bold",

  // Table wrapper – full width scrollable container
 tableWrapper: "mt-6 w-full overflow-x-auto",
  tableContainer: "min-w-[600px] md:min-w-[600px] lg:min-w-[400px] lg:max-w-[1000px] mx-auto",
  tableWidth: "w-auto mx-auto border-collapse",

  // Table cells
  cellPadding: "px-3 py-2",
  cellText: "text-sm md:text-sm",
},

achievementsAchievers: {
  sectionPadding: "py-8 md:py-12",

  wrapper: "flex flex-col items-center gap-10",

  itemWrapper: "flex flex-col items-center text-center gap-3",

  imageWrapper:
    "relative w-24 h-24 md:w-32 md:h-32  overflow-hidden",

  nameText: "text-base md:text-lg font-bold",

  descriptionText:
    "text-sm md:text-base max-w-xl text-center leading-relaxed",
},

athleticAchievements: {
  // Section padding
  sectionPadding: "py-8 md:py-12",

  // Wrapper for all headings
  headingWrapper: "flex flex-col items-center text-center gap-4 w-full",

  // Headings: same size on small screens
  headingSize: "text-2xl sm:text-2xl md:text-3xl lg:text-3xl",
  headingWeight: "font-bold",

  // Items (individual headings + images)
  itemWrapper: "flex flex-col items-center text-center gap-3",
  imageWrapper: "relative w-32 h-32 md:w-40 md:h-40 mx-auto",
},

//events 

eventsTerm: {
  sectionPadding: "py-8 md:py-12",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-2xl font-bold",

  /* TABLE */
  tableWrapper: "w-full overflow-x-auto flex justify-center",

  tableContainer:
    "w-full md:w-[90%] lg:w-[60%] mx-auto",

  table: "w-full border-collapse",

  cellPadding: "px-3 py-2",
  cellText: "text-sm md:text-base",
},

eventsExams: {
  sectionPadding: "py-8 md:py-12",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-2xl font-bold",

  /* SUBHEADING */
  subHeading: "text-lg md:text-xl font-semibold text-center mb-4", // gap added via mb-4

  /* TABLE */
  tableWrapper: "w-full overflow-x-auto flex justify-center mb-8", // add bottom margin for spacing after table
  tableContainer: "w-full md:w-[90%] lg:w-[60%] mx-auto",
  table: "w-full border-collapse",
  cellPadding: "px-3 py-2",
  cellText: "text-sm md:text-base text-left", // left align table content
},

eventsSeminar: {
  sectionPadding: "py-8 md:py-12",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-2xl font-bold",

  /* TABLE */
  tableWrapper: "w-full overflow-x-auto flex justify-center mb-8",
  tableContainer: "w-full md:w-[90%] lg:w-[60%] mx-auto",
  table: "w-full border-collapse",
  cellPadding: "px-3 py-2",
  cellText: "text-sm md:text-base text-left", // align content left
},

eventsFieldTrips: {
  sectionPadding: "py-8 md:py-12",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-2xl font-bold",

  tableWrapper: "w-full overflow-x-auto flex justify-center mb-4",
  tableContainer: "w-full md:w-[85%] lg:w-[85%] mx-auto",
  table: "w-full border-collapse",
  cellPadding: "px-3 py-2",
  cellText: "text-sm md:text-base text-left",

 imagesWrapper: "flex flex-wrap justify-center gap-4 mt-4 mb-8",
image: "w-full sm:w-[30%] md:w-[25%] lg:w-[20%] h-auto rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer",
},

//Career

careersBanner: {
  sectionPadding: "py-0",
  imageWrapper: "w-full",
  image:"w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[350px] object-cover",
},

careersTeachers: {
  sectionPadding: "py-10 md:py-14 lg:py-16",
  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-2xl lg:text-3xl font-bold",
  contentWrapper:"w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8",
  textWrapper: "w-full md:w-1/2",
  paragraph:"text-sm md:text-base leading-relaxed text-justify",
  imageWrapper: "w-full md:w-1/2 flex justify-center",
  image:"w-[85%] sm:w-[70%] md:w-full max-w-[420px] rounded shadow-md object-cover",
},

//GALLERY PAGE

 gallerySectionOne: {
  sectionPadding: "py-8 md:py-12",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-xl md:text-3xl font-bold",

  galleryWrapper: "flex overflow-x-auto gap-4",
  imageWrapper:
    "flex-shrink-0 w-[200px] md:w-[250px] lg:w-[300px] h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer",
},

gallerySportsMeet: {
  sectionPadding: "py-8 md:py-12 px-4",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-2xl md:text-4xl font-bold text-center",

  /* container for all rows */
  rowsWrapper: "flex flex-col gap-6",

  /* each row of images */
  imageRow: "flex justify-center flex-wrap gap-4",

  /* image styling */
  image:
    "w-[150px] sm:w-[180px] md:w-[220px] h-auto rounded shadow hover:scale-105 transition-transform",
},

galleryIndependence: {
  sectionPadding: "py-8 md:py-12 px-4",

  headingWrapper: "flex justify-center mb-6",
  headingSize: "text-2xl md:text-4xl font-bold text-center",

  rowsWrapper: "flex flex-col gap-6",

  /* Horizontal scroll small screens, wrap & center on medium+ screens */
  scrollRow:
    "flex gap-4 py-2 overflow-x-auto flex-nowrap sm:flex-nowrap md:flex-wrap md:justify-center",

  image:
    "w-[150px] sm:w-[180px] md:w-[220px] h-auto rounded shadow hover:scale-105 transition-transform",
},
 

//contact 
contactBanner: {
  sectionPadding: "pt-0 pb-10 md:pb-16 lg:pb-10",

  imageWrapper: "w-full",
  image:
    "w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] object-cover",
},


    contactSections: {
      sectionPadding: "pt-10 pb-14 md:pb-16 lg:pb-20",
      sectionWrapper: "flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-20",
      itemWrapper: "flex flex-col items-center text-center gap-4",
      image: "w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain",
      heading: "font-bold text-xl md:text-2xl lg:text-3xl",
      text: "text-sm md:text-base lg:text-lg whitespace-pre-line",
    },

   /* contactFormMap: {
      sectionPadding: "pt-10 pb-14 md:pb-16 lg:pb-20",
      sectionWrapper:
        "flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-16 lg:gap-20",
      formWrapper:
        "w-full md:w-1/2 flex flex-col gap-4 md:pl-8 lg:pl-16", // shifts form slightly to the middle
      input:
        "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500",
      textarea:
        "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none",
      button:
        "bg-purple-600 text-white font-bold px-6 py-2 rounded hover:bg-purple-700 transition-colors",
      
        mapWrapper: "w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]",
      iframe: "w-full h-full border-0",
    },*/

   contactFormMap: {
  /* SECTION */
  sectionPadding: "pt-8 pb-12 sm:pt-10 sm:pb-14 md:pb-16 lg:pb-20",

  /* MAIN LAYOUT */
  sectionWrapper:
    "flex flex-col md:flex-row items-stretch justify-center gap-6 sm:gap-8 md:gap-14 lg:gap-20",

  /* 🔹 GOOGLE FORM (LEFT) */
  formWrapper:
    `
    w-full
    md:w-1/2
    flex
    justify-center
    px-3 sm:px-4 md:px-0
    h-[85vh]
    sm:h-[90vh]
    md:h-auto
    md:min-h-[650px]
    lg:min-h-[720px]
    `,

  /* 🔹 MAP (RIGHT) */
  mapWrapper:
    `
    w-full
    md:w-1/2
    px-3 sm:px-4 md:px-0
    h-[60vh]
    sm:h-[65vh]
    md:h-auto
    md:min-h-[450px]
    lg:min-h-[520px]
    `,

  /* 🔹 IFRAME */
  iframe:
    "w-full h-full border-0 rounded-md",
},

  },
};
