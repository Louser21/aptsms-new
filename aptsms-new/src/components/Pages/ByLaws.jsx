import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <h2 className="text-lg font-bold text-green-700 mb-2 border-b pb-1">{title}</h2>
    <div className="text-gray-800 space-y-1 text-justify">{children}</div>
  </motion.div>
);

const BylawsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-3 md:px-8">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-center text-green-900 mb-4"
      >
        Society Bylaws
      </motion.h1>

      <Section title="General Body">
        <p>All ordinary, student, life, honorary members and one corporate representative constitute the general body. Each member can participate in meetings, contest elections, and vote.</p>
        <p>The Annual General Body meets once a year at a time and place decided by the Executive Council.</p>
        <p><strong>Functions:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>Pass budget and approve previous year's expenditure.</li>
          <li>Approve the society's activity report.</li>
          <li>Elect the Executive Committee.</li>
          <li>Appoint an auditor.</li>
        </ul>
      </Section>

      <Section title="Executive Council">
        <p>The council includes 14 persons: President, 2 Vice-Presidents, General Secretary, Office Secretary, Treasurer, 4 elected members, ex-officio members, Editor, and Editorial Secretary (nominated).</p>
        <p><strong>Tenure:</strong> President and Treasurer (1 year), Editor and Editorial Secretary (3 years), others (2 years). Casual vacancies are co-opted. Retirement follows a rotating schedule.</p>
        <p><strong>Powers:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>Admit members and manage society affairs.</li>
          <li>Organize events to promote objectives.</li>
          <li>Fill vacancies by co-option.</li>
          <li>Frame and implement rules.</li>
          <li>Prepare budget and raise funds.</li>
          <li>Accept gifts and hire staff.</li>
          <li>Sanction or revoke chapters in AP and Telangana.</li>
          <li>Prepare election lists and appoint election officers.</li>
          <li>Scrutinize accounts and appoint auditors.</li>
        </ul>
        <p>Decisions are made by a simple majority.</p>
      </Section>

      <Section title="Duties of Office Bearers">
        <p><strong>President:</strong> Presides over meetings, nominates Editor and Editorial Secretary.</p>
        <p><strong>General Secretary:</strong> Executes council decisions, organizes events, publishes the journal, and represents the society legally.</p>
        <p><strong>Office Secretary:</strong> Handles correspondence, prepares budget, assists General Secretary.</p>
        <p><strong>Treasurer:</strong> Maintains accounts, collects dues, prepares budget and financial reports.</p>
        <p><strong>Editor & Editorial Secretary:</strong> Publish the journal, appoint editorial board, manage scientific communication.</p>
      </Section>

      <Section title="Quorum">
        <p>General Body Meeting: 15 members or 1/5th of total members (whichever is less), with at least 3 non-council members.</p>
        <p>Executive Council Meeting: 4 members, with at least one non-office bearer.</p>
      </Section>

      <Section title="Funds and Properties">
        <ul className="list-disc list-inside pl-4">
          <li>Bank account operated by Office Secretary and Treasurer jointly.</li>
          <li>Funds include fees, grants, donations, and property (movable and immovable).</li>
          <li>Funds used only for society's objectives.</li>
        </ul>
      </Section>

      <Section title="Amendment">
        <p>Amendments require 2/3 vote in a special meeting and confirmation by 2/3 vote in a second special meeting.</p>
      </Section>

      <Section title="Winding Up">
        <p>In case of dissolution, society's funds and property will be transferred to a similar institution.</p>
      </Section>
    </div>
  );
};

export default BylawsPage;
