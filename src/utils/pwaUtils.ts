// PWA utility functions

export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show update notification
              showUpdateNotification();
            }
          });
        }
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

export const showUpdateNotification = (): void => {
  // You can implement a custom notification here
  if (confirm('نسخه جدید اپلیکیشن در دسترس است. آیا می‌خواهید به‌روزرسانی کنید؟')) {
    window.location.reload();
  }
};

export const checkPWADisplayMode = (): string => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return 'standalone';
  }
  if (window.matchMedia('(display-mode: minimal-ui)').matches) {
    return 'minimal-ui';
  }
  if (window.matchMedia('(display-mode: fullscreen)').matches) {
    return 'fullscreen';
  }
  return 'browser';
};

export const isPWAInstalled = (): boolean => {
  const displayMode = checkPWADisplayMode();
  const isIOSStandalone = (window.navigator as any).standalone === true;
  
  return displayMode === 'standalone' || isIOSStandalone;
};

export const getInstallInstructions = (): { platform: string; instructions: string[] } => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return {
      platform: 'iOS',
      instructions: [
        'روی آیکون اشتراک‌گذاری (مربع با فلش) در پایین صفحه ضربه بزنید',
        'گزینه "Add to Home Screen" را انتخاب کنید',
        'روی "Add" ضربه بزنید تا اپلیکیشن به صفحه اصلی اضافه شود'
      ]
    };
  }
  
  if (userAgent.includes('android')) {
    return {
      platform: 'Android',
      instructions: [
        'روی منوی مرورگر (سه نقطه) ضربه بزنید',
        'گزینه "Add to Home screen" را انتخاب کنید',
        'نام اپلیکیشن را تأیید کرده و "Add" را بزنید'
      ]
    };
  }
  
  return {
    platform: 'Desktop',
    instructions: [
      'روی آیکون نصب در نوار آدرس کلیک کنید',
      'یا از منوی مرورگر گزینه "Install app" را انتخاب کنید',
      'روی "Install" کلیک کنید تا اپلیکیشن نصب شود'
    ]
  };
};