import React from "react";
import styles from "../pages/AdminDashboard.module.css";

interface AdminSideBarProps {
  activeSection: string;
  handleSectionChange: (section: string) => void;
  handleShowModal: () => void;
  handleLogout: () => void;
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({
  activeSection,
  handleSectionChange,
  handleShowModal,
  handleLogout,
}) => {
  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "adminProfile" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("adminProfile")}
      >
        Admin Profile
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "adminDashUserDetails"
            ? styles.activeSidebarText
            : ""
        }`}
        onClick={() => handleSectionChange("adminDashUserDetails")}
      >
        Users Detail
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "appointments" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("appointments")}
      >
        Appointments Management
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "propertyVerification"
            ? styles.activeSidebarText
            : ""
        }`}
        onClick={() => handleSectionChange("propertyVerification")}
      >
        Property Verification
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "reviews" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("reviews")}
      >
        Reviews Management
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "enquiries" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("enquiries")}
      >
        Enquiries Management
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "adminsList" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("adminsList")}
      >
        Admins
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "staffManagement" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("staffManagement")}
      >
        Staff Management
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "staffPerformance" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("staffPerformance")}
      >
        Staff Performance
      </div>
      <div
        className={`${styles.sidebarText} ${
          activeSection === "contractorVerification" ? styles.activeSidebarText : ""
        }`}
        onClick={() => handleSectionChange("contractorVerification")}
      >
        Contractor Verification
      </div>

      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default AdminSideBar;
