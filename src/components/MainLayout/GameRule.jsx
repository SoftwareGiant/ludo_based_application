import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { IconButton } from "@material-tailwind/react";

const GameRule = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen max-w-[480px] h-full bg-white">
      <TopbarMobile />
      <div className="bg-white w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={() => navigate("/")}
            >
              <Icon
                icon="mingcute:arrow-left-line"
                className="text-black"
                width="30"
              />
            </IconButton>
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              Game : <b>rules</b>
            </div>
          </div>
        </div>

        <div className="max-w-3xl font-[Nunito-Sans] mx-auto p-6 pt-0">
          <h2 className="text-2xl font-bold mb-3">Rule 1 - Rule 12</h2>
          <p className="mb-4">
            Ludo King™ is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and disclose information about
            you when you use our mobile application (the "App") or website (the
            "Site").
          </p>

          <h2 className="text-2xl font-bold mb-3">Rule 13.1 - Rule 13.4</h2>
          <p className="mb-4">
            We may collect information about you directly from you and from
            third-party sources, as well as automatically through your use of
            our App or Site. The types of information we may collect about you
            include:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              Contact and demographic information, such as your name, email
              address, postal address, phone number, and date of birth.
            </li>
            <li>
              Payment information, such as your credit card or other payment
              account information.
            </li>
            <li>
              Information about your use of the App or Site, such as your IP
              address, device type, browser type and version, operating system
              type and version, mobile platform, demographic information (such
              as your country), the pages of our Site that you visit, the time
              and date of your visit, the time spent on those pages and other
              statistics.
            </li>
            <li>
              Information about your location when you access the App or Site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">Use of Information</h2>
          <p className="mb-4">
            We may use the information we collect about you to:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Provide our App and Site to you.</li>
            <li>Process transactions.</li>
            <li>Respond to your inquiries and requests.</li>
            <li>
              Send you administrative messages and other information about Ludo
              King™.
            </li>
            <li>Personalize your experience on our App or Site.</li>
            <li>Analyze usage of our App or Site.</li>
            <li>Enforce our terms and conditions and other policies.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">Sharing of Information</h2>
          <p className="mb-4">
            We may share the information we collect about you:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              With third-party service providers who perform services on our
              behalf.
            </li>
            <li>
              With third parties for their own marketing purposes. If you do not
              want us to share your personal information with these companies,
              please contact us at{" "}
              <a
                href="mailto:support@ludoking.com"
                className="text-blue-500 underline"
              >
                support@ludoking.com
              </a>
              .
            </li>
            <li>
              In response to a request for information if we believe disclosure
              is in accordance with any applicable law, regulation or legal
              process, or as otherwise required by any applicable law, rule or
              regulation.
            </li>
            <li>
              If we believe your actions are inconsistent with our user
              agreements or policies, or to protect the rights, property and
              safety of Ludo King™ or others.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">Security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect information about you
            from loss, theft, misuse and unauthorized access, disclosure,
            alteration and destruction.
          </p>

          <h2 className="text-2xl font-bold mb-3">Your Choices</h2>
          <p className="mb-4">
            You may opt out of receiving promotional emails from us by following
            the instructions in those emails. If you opt out, we may still send
            you non-promotional emails.
          </p>

          <h2 className="text-2xl font-bold mb-3">
            Changes to Our Privacy Policy
          </h2>
          <p className="mb-4">
            We may change this Privacy Policy from time to time. If we make
            changes, we will notify you by revising the date at the top of this
            policy and in some cases by adding notices on our homepage or
            sending you an email notification. We encourage you to review the
            Privacy Policy whenever you access the App or Site to stay informed
            about our information practices.
          </p>

          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@ludoking.com"
              className="text-blue-500 underline"
            >
              support@ludoking.com
            </a>
            .
          </p>
        </div>

        {/* <div className="bg-white flex flex-col gap-2 text-[#0F002B] font-[Nunito-Sans] w-full min-h-screen overflow-hidden relative p-4 pb-20">
          <div className="p-4 max-w-4xl mx-auto mt-0 pt-0">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">
              Ludo King™ is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and disclose information
              about you when you use our mobile application (the "App") or
              website (the "Site").
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you directly from you and from
              third-party sources, as well as automatically through your use of
              our App or Site. The types of information we may collect about you
              include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Contact and demographic information, such as your name, email
                address, postal address, phone number, and date of birth.
              </li>
              <li>
                Payment information, such as your credit card or other payment
                account information.
              </li>
              <li>
                Information about your use of the App or Site, such as your IP
                address, device type, browser type and version, operating system
                type and version, mobile platform, demographic information (such
                as your country), the pages of our Site that you visit, the time
                and date of your visit, the time spent on those pages and other
                statistics.
              </li>
              <li>
                Information about your location when you access the App or Site.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Use of Information</h2>
            <p className="mb-4">
              We may use the information we collect about you to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Provide our App and Site to you.</li>
              <li>Process transactions.</li>
              <li>Respond to your inquiries and requests.</li>
              <li>
                Send you administrative messages and other information about
                Ludo King™.
              </li>
              <li>Personalize your experience on our App or Site.</li>
              <li>Analyze usage of our App or Site.</li>
              <li>Enforce our terms and conditions and other policies.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">
              Sharing of Information
            </h2>
            <p className="mb-4">
              We may share the information we collect about you:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                With third-party service providers who perform services on our
                behalf.
              </li>
              <li>
                With third parties for their own marketing purposes. If you do
                not want us to share your personal information with these
                companies, please contact us at{" "}
                <a
                  href="mailto:support@ludoking.com"
                  className="text-blue-500 underline"
                >
                  support@ludoking.com
                </a>
                .
              </li>
              <li>
                In response to a request for information if we believe
                disclosure is in accordance with any applicable law, regulation
                or legal process, or as otherwise required by any applicable
                law, rule or regulation.
              </li>
              <li>
                If we believe your actions are inconsistent with our user
                agreements or policies, or to protect the rights, property and
                safety of Ludo King™ or others.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect information about you
              from loss, theft, misuse and unauthorized access, disclosure,
              alteration and destruction.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
            <p className="mb-4">
              You may opt out of receiving promotional emails from us by
              following the instructions in those emails. If you opt out, we may
              still send you non-promotional emails.
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Changes to Our Privacy Policy
            </h2>
            <p className="mb-4">
              We may change this Privacy Policy from time to time. If we make
              changes, we will notify you by revising the date at the top of
              this policy and in some cases by adding notices on our homepage or
              sending you an email notification. We encourage you to review the
              Privacy Policy whenever you access the App or Site to stay
              informed about our information practices.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@ludoking.com"
                className="text-blue-500 underline"
              >
                support@ludoking.com
              </a>
              .
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GameRule;
