"use client";

import DropDown from "@/icons/DropDown";
import { useState } from "react";

// Define data structure
interface InvestmentData {
  year: number;
  grossAverageDailyRentalRate: number;
  nightOccupied: number;
  numberOfRentalStays: number;
  averageLengthOfStay: number;
  grossRentalIncome: number;
  turnoverCleaningAndLinenFees: number;
  netRentalIncome: number;
  rentalCommission: number;
  keekareMaintProgram: number;
  paymentProcessingFee: number;
  annualDeepCleaningFee: number;
  totalExpenses: number;
  grossOperatingIncome: number;
}

// Define row configuration type
interface RowConfig {
  key: keyof InvestmentData;
  label: string;
  isCurrency?: boolean;
  isTotal?: boolean;
  isGoldText?: boolean;
}

export default function ReturnOfInvestment() {
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [isYearMenuOpen, setIsYearMenuOpen] = useState(false);

  // Sample data
  const investmentData: InvestmentData[] = [
    {
      year: 1,
      grossAverageDailyRentalRate: 228.07,
      nightOccupied: 138,
      numberOfRentalStays: 35,
      averageLengthOfStay: 3.93,
      grossRentalIncome: 31465,
      turnoverCleaningAndLinenFees: 4054,
      netRentalIncome: 27512,
      rentalCommission: 4127,
      keekareMaintProgram: 339,
      paymentProcessingFee: 473,
      annualDeepCleaningFee: 288,
      totalExpenses: 5227,
      grossOperatingIncome: 22285,
    },
    {
      year: 2,
      grossAverageDailyRentalRate: 234.49,
      nightOccupied: 145,
      numberOfRentalStays: 37,
      averageLengthOfStay: 3.92,
      grossRentalIncome: 33666,
      turnoverCleaningAndLinenFees: 4255,
      netRentalIncome: 29311,
      rentalCommission: 4397,
      keekareMaintProgram: 349,
      paymentProcessingFee: 488,
      annualDeepCleaningFee: 296,
      totalExpenses: 5530,
      grossOperatingIncome: 23781,
    },
    {
      year: 3,
      grossAverageDailyRentalRate: 234.96,
      nightOccupied: 145,
      numberOfRentalStays: 37,
      averageLengthOfStay: 3.92,
      grossRentalIncome: 34069,
      turnoverCleaningAndLinenFees: 4255,
      netRentalIncome: 29814,
      rentalCommission: 4472,
      keekareMaintProgram: 360,
      paymentProcessingFee: 502,
      annualDeepCleaningFee: 305,
      totalExpenses: 5639,
      grossOperatingIncome: 24175,
    },
  ];

  // Define row configurations for each section
  const incomeRows: RowConfig[] = [
    {
      key: "grossAverageDailyRentalRate",
      label: "Gross Average Daily Rental Rate",
      isCurrency: true,
    },
    { key: "nightOccupied", label: "Night Occupied" },
    { key: "numberOfRentalStays", label: "Number of Rental Stays" },
    { key: "averageLengthOfStay", label: "Average Length of Stay" },
    {
      key: "grossRentalIncome",
      label: "Gross Rental Income",
      isCurrency: true,
    },
    {
      key: "turnoverCleaningAndLinenFees",
      label: "Turnover Cleaning & Linen Fees",
      isCurrency: true,
    },
    { key: "netRentalIncome", label: "Net Rental Income", isCurrency: true },
  ];

  const expenseRows: RowConfig[] = [
    {
      key: "rentalCommission",
      label: "15% Rental Commission",
      isCurrency: true,
    },
    {
      key: "keekareMaintProgram",
      label: "Keekare Maint Program",
      isCurrency: true,
    },
    {
      key: "paymentProcessingFee",
      label: "Payment Processing Fee",
      isCurrency: true,
    },
    {
      key: "annualDeepCleaningFee",
      label: "Annual Deep Cleaning Fee",
      isCurrency: true,
    },
    { key: "totalExpenses", label: "TOTAL", isCurrency: true, isTotal: true },
  ];

  const summaryRows: RowConfig[] = [
    {
      key: "grossOperatingIncome",
      label: "GROSS OPERATING INCOME",
      isCurrency: true,
      isTotal: true,
    },
  ];

  // Year selector component
  const YearSelector = () => (
    <div className="relative inline-block">
      <button
        className="flex items-center justify-between gap-2 px-3 py-1 font-medium bg-accent text-black min-w-[80px] hover:bg-accent transition-colors"
        onClick={() => setIsYearMenuOpen(!isYearMenuOpen)}
      >
        <DropDown />
        <span>Year-{selectedYear}</span>
      </button>

      {isYearMenuOpen && (
        <div className="absolute right-0 mt-1 w-full bg-accent bg-opacity-50 border border-accent  shadow-lg z-10">
          {investmentData.map((data) => (
            <button
              key={`year-option-${data.year}`}
              className="block w-full  text-left px-3 py-1.5 hover:text-accent hover:bg-[#333] transition-colors"
              onClick={() => {
                setSelectedYear(data.year);
                setIsYearMenuOpen(false);
              }}
            >
              Year-{data.year}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Format currency helper
  const formatCurrency = (value: number): string => {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  // Render a data row
  const renderDataRow = (config: RowConfig) => {
    const { key, label, isCurrency, isTotal, isGoldText } = config;
    const fontWeightClass = isTotal ? "font-medium" : "";

    return (
      <div
        key={key.toString()}
        data-aos="fade-up"
        className={`group grid grid-cols-2 lg:grid-cols-2 ${fontWeightClass} cursor-default transition-colors py-0.5`}
      >
        {/* Left label column */}
        <div
          className={`col-span-1 text-sm md:text-base transition-colors ${
            isGoldText ? "text-accent" : "group-hover:text-accent"
          }`}
        >
          {label}
        </div>

        {/* Mobile & Tablet Right Value */}
        <div
          className={`lg:hidden text-right text-sm md:text-base transition-colors ${
            isGoldText ? "text-accent" : "group-hover:text-accent"
          }`}
        >
          {isCurrency
            ? `$${formatCurrency(investmentData[selectedYear - 1][key])}`
            : investmentData[selectedYear - 1][key]}
        </div>

        {/* Desktop Right Columns */}
        <div className="lg:grid lg:grid-cols-3">
          {investmentData.map((data) => (
            <div
              key={`${key}-${data.year}`}
              className={`hidden lg:block text-center text-sm md:text-base transition-colors ${
                isGoldText ? "text-accent" : "group-hover:text-accent"
              }`}
            >
              {isCurrency ? `$${formatCurrency(data[key])}` : data[key]}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 lg:p-8  w-full  font-light">
      <h2 className="lg:text-6xl text-3xl text-center py-5" data-aos="fade-up">
        Return Of Investment
      </h2>

      {/* RENTAL INCOME SECTION */}
      <div className="mb-6" data-aos="fade-up">
        <div className="flex justify-between items-center mb-2">
          <p className="text-accent text-lg md:text-[2.5vw] 2xl:text-4xl lg:hidden font-medium">
            Rental Income
          </p>

          {/* Mobile & Tablet View - Year Selector */}
          <div className="lg:hidden">
            <YearSelector />
          </div>
        </div>

        {/* Desktop View - Table Headers */}
        <div className="hidden lg:grid lg:grid-cols-2 mb-1">
          <p className="text-lg md:text-[1.5vw] 2xl:text-3xl font-medium">
            Rental Income
          </p>
          <div className="hidden lg:grid lg:grid-cols-3">
            {investmentData.map((data) => (
              <div
                key={`header-${data.year}`}
                className="text-center text-lg  md:text-[1.5vw] 2xl:text-3xl"
              >
                <span>Year-{data.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Income Items */}
        <div className="space-y-1.5">{incomeRows.map(renderDataRow)} </div>
      </div>

      {/* EXPENSES SECTION */}
      <div className="mb-6" data-aos="fade-up">
        <p className="text-lg md:text-[2.5vw] 2xl:text-4xl font-medium">
          Expenses
        </p>

        <div className="space-y-1.5">{expenseRows.map(renderDataRow)}</div>
      </div>
      <div className="h-0.25 w-full bg-foreground mb-4"></div>
      {/* GROSS OPERATING INCOME */}
      <div>{summaryRows.map(renderDataRow)}</div>
    </div>
  );
}
