
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
  },
};
