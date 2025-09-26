// src/lib/gtm.ts

// Use existing global dataLayer type instead of redeclaring
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
    console.log('GTM Event:', eventName, parameters);
  }
};

// Specific tracking functions
export const trackButtonClick = (buttonText: string, location?: string) => {
  trackEvent('button_click', {
    button_text: buttonText,
    button_location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== 'undefined' ? document.title : ''),
  });
};

// Additional tracking functions for your portfolio
export const trackCVEngagement = (action: string, details?: Record<string, any>) => {
  trackEvent('cv_engagement', {
    engagement_action: action,
    page_path: '/cv',
    ...details
  });
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    content_type: 'portfolio_project',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};
