import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Custom ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  handleBackToHomepage = () => {
    window.location.href = "/";
  };
  render() {
    if (this.state.hasError) {
      // Fallback UI or error message
      return (
        <section className="bg-[#fca837] min-h-screen max-w-[480px] ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                Something went wrong.
              </p>
              <p className="mb-4 text-lg font-light text-gray-900 ">
                Sorry, we can't find that page. You'll find lots to explore on
                the home page.
              </p>
              <button
                className="inline-flex text-white bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 animated-button"
                onClick={this.handleBackToHomepage}
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
