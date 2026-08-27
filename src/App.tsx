import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyBookingBar } from './components/StickyBookingBar';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { HeadSpaPage } from './pages/HeadSpaPage';
import { HydrafacialPage } from './pages/HydrafacialPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { BookingFormData } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Japanese Head Spa');
  const [lastSubmittedBooking, setLastSubmittedBooking] = useState<BookingFormData | null>(null);

  // Sync hash/path if user uses browser history or direct links
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'head-spa', 'hydrafacial', 'treatments', 'about-contact', 'thank-you'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (serviceInterest?: string) => {
    if (serviceInterest) {
      setSelectedServiceForModal(serviceInterest);
    }
    setBookingModalOpen(true);
  };

  const handleCompleteReservation = (data: BookingFormData) => {
    setLastSubmittedBooking(data);
    setCurrentTab('thank-you');
    window.location.hash = 'thank-you';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentTab) {
      case 'head-spa':
        return <HeadSpaPage onOpenBooking={handleOpenBookingModal} />;
      case 'hydrafacial':
        return <HydrafacialPage onOpenBooking={handleOpenBookingModal} />;
      case 'treatments':
        return <TreatmentsPage onOpenBooking={handleOpenBookingModal} />;
      case 'about-contact':
        return (
          <AboutContactPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBookingModal}
            onSubmitContactForm={handleCompleteReservation}
          />
        );
      case 'thank-you':
        return (
          <ThankYouPage
            bookingData={lastSubmittedBooking}
            onReturnHome={() => handleNavigate('home')}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBookingModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A2421] pb-16 md:pb-0">
      {/* Sticky Header with Persistent Book Now & Direct Phone */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBookingModal}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Consistent Full-Stack Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBookingModal}
      />

      {/* Persistent Bottom Mobile & Floating Booking Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Interactive Concierge & GlossGenius Booking Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForModal}
        onCompleteReservation={handleCompleteReservation}
      />
    </div>
  );
}
