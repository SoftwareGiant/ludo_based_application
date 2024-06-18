import React from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import LudoMainLogo from "../MainLayout/LudoMainLogo";

const Content = () => {
  const navigate = useNavigate();
  return (
      <div className="max-w-[480px] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a] flex justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
          <div className="flex gap-3 items-center">
            <div className="cursor-pointer  p-1 " onClick={() => navigate("/")}>
              {" "}
              <RxCross2 />
            </div>
            <span>Content Policies</span>
          </div>
          <LudoMainLogo />
        </div>

        <div className="bg-white flex flex-col gap-2 text-[#0F002B] font-[Nunito-Sans] w-full min-h-screen overflow-hidden relative p-4 pb-20">
          <b>Content Policies</b>
          <p>
            Ludo Maharaj™ is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and disclose information about
            you when you use our mobile application (the "App") or website (the
            "Site").
          </p>
          <b>Information We Collect</b>
          <p>
            We may collect information about you directly from you and from
            third-party sources, as well as automatically through your use of
            our App or Site.
          </p>
          <p>The types of information we may collect about you include:</p>
          <p>
            {" "}
            - Contact and demographic information, such as your name, email
            address, postal address, phone number, and date of birth.
          </p>{" "}
          <p>
            - Payment information, such as your credit card or other payment
            account information. - Information about your use of the App or
            Site, such as your IP address, device type, browser type and
            version, operating system type and version, mobile platform,
            demographic information (such as your country), the pages of our
            Site that you visit, the time and date of your visit, the time spent
            on those pages and other statistics.
          </p>
          <p>
            - Information about your location when you access the App or Site.
          </p>
          <b>Use of Information</b>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>- Provide our App and Site to you.</li>
            <li> - Process transactions. </li>
            <li> - Respond to your inquiries and requests.</li>
            <li>
              - Send you administrative messages and other information about
              Ludo Maharaj™.{" "}
            </li>
            <li> - Personalize your experience on our App or Site.</li>
            <li>- Analyze usage of our App or Site.</li>
            <li>- Enforce our terms and conditions and other policies.</li>
          </ul>
          <b>Sharing of Information</b>
          <p> We may share the information we collect about you:</p>
          <ul>
            <li>
              - With third-party service providers who perform services on our
              behalf.
            </li>
            <li>
              {" "}
              - With third parties for their own marketing purposes. If you do
              not want us to share your personal information with these
              companies, please contact us at
              [support@ludoking.com](mailto:support@ludoking.com).{" "}
            </li>
            <li>
              {" "}
              - In response to a request for information if we believe
              disclosure is in accordance with any applicable law, regulation or
              legal process, or as otherwise required by any applicable law,
              rule or regulation.{" "}
            </li>
            <li>
              If we believe your actions are inconsistent with our user
              agreements or policies, or to protect the rights, property and
              safety of Ludo Maharaj™ or others.
            </li>
          </ul>
          <b> Security</b>
          <p>
            We take reasonable measures to help protect information about you
            from loss, theft, misuse and unauthorized access, disclosure,
            alteration and destruction.
          </p>
          <b>Your Choices</b>
          <p>
            {" "}
            You may opt out of receiving promotional emails from us by following
            the instructions in those emails. If you opt out, we may still send
            you non-promotional emails.
          </p>
          <b> Changes to Our Privacy Policy</b>
          <p>
            {" "}
            We may change this Privacy Policy from time to time. If we make
            changes, we will notify you by revising the date at the top of this
            policy and in some cases by adding notices on our homepage or
            sending you an email notification. We encourage you to review the
            Privacy Policy whenever you access the App or Site to stay informed
            about our information practices.
          </p>
          <b> Contact Us</b>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at [support@ludoking.com](mailto:support@ludoking.com).
          </p>
        </div>
      </div>
  );
};

export default Content;
