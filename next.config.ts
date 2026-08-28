import type { NextConfig } from "next";

// 旧バニラJS版（dangerous-materials-fe4）で使われていた静的HTMLのURLから、
// Next.js版の新URLへの301リダイレクト一覧。
// Google Search Consoleでインデックス済みだった全66件のURLを基に、実際のルート一覧と突き合わせて生成した。
// 生成日: 2026-08-28
const LEGACY_URL_REDIRECTS: { source: string; destination: string; permanent: boolean }[] = [
  { source: '/basics/properties_prevention/class1_petroleum_properties/Otsux_Prop_Class1_Petroleum_Properties_001.html', destination: '/basics/properties_prevention/class1_petroleum_properties', permanent: true },
  { source: '/basics/law/manufacturing_facility_standards/Otsux_Law_Manufacturing_Facility_Standards_001.html', destination: '/basics/law/manufacturing_facility_standards', permanent: true },
  { source: '/basics/law/facility_permissions/Otsux_Law_Facility_Permissions_001.html', destination: '/basics/law/facility_permissions', permanent: true },
  { source: '/basics/law/self_refueling_station_standards/Otsux_Law_Self_Refueling_Station_Standards_001.html', destination: '/basics/law/self_refueling_station_standards', permanent: true },
  { source: '/basics/law/license_issuance/Otsux_Law_License_Issuance_001.html', destination: '/basics/law/license_issuance', permanent: true },
  { source: '/basics/law/buffer_space_requirements/Otsux_Law_Buffer_Space_Requirements_001.html', destination: '/basics/law/buffer_space_requirements', permanent: true },
  { source: '/basics/law/tables/safety_distances_001.html', destination: '/basics/law/chapter1_summary/safety_distances', permanent: true },
  { source: '/basics/properties_prevention/animal_vegetable_oil_properties/Otsux_Prop_Animal_Vegetable_Oil_Properties_001.html', destination: '/basics/properties_prevention/animal_vegetable_oil_properties', permanent: true },
  { source: '/basics/law/indoor_storage_standards/Otsux_Law_Indoor_Storage_Standards_001.html', destination: '/basics/law/indoor_storage_standards', permanent: true },
  { source: '/basics/law/facility_categories/Otsux_Law_Facility_Categories_001.html', destination: '/basics/law/facility_categories', permanent: true },
  { source: '/basics/law/temporary_storage_handling/Otsux_Law_Temporary_Storage_Handling_001.html', destination: '/basics/law/temporary_storage_handling', permanent: true },
  { source: '/basics/law/facility_safety_staff/Otsux_Law_Facility_Safety_Staff_001.html', destination: '/basics/law/facility_safety_staff', permanent: true },
  { source: '/basics/law/safety_lectures/Otsux_Law_Safety_Lectures_001.html', destination: '/basics/law/safety_lectures', permanent: true },
  { source: '/basics/law/refueling_station_standards/Otsux_Law_Refueling_Station_Standards_001.html', destination: '/basics/law/refueling_station_standards', permanent: true },
  { source: '/basics/law.html', destination: '/basics/law', permanent: true },
  { source: '/basics/law/general_standards_part2/Otsux_Law_General_Standards_Part2_001.html', destination: '/basics/law/general_standards_part2', permanent: true },
  { source: '/basics/properties_prevention/special_flammable_properties/Otsux_Prop_Special_Flammable_Properties_001.html', destination: '/basics/properties_prevention/special_flammable_properties', permanent: true },
  { source: '/basics/law/safety_supervisors/Otsux_Law_Safety_Supervisors_001.html', destination: '/basics/law/safety_supervisors', permanent: true },
  { source: '/basics/law/signs_and_notices/Otsux_Law_Signs_And_Notices_001.html', destination: '/basics/law/signs_and_notices', permanent: true },
  { source: '/basics/properties_prevention/alcohol_properties/Otsux_Prop_Alcohol_Properties_001.html', destination: '/basics/properties_prevention/alcohol_properties', permanent: true },
  { source: '/contents/free.html', destination: '/contents/free', permanent: true },
  { source: '/basics/law/regular_inspections/Otsux_Law_Regular_Inspections_001.html', destination: '/basics/law/regular_inspections', permanent: true },
  { source: '/basics/properties_prevention/class4_properties/Otsux_Prop_Class4_Properties_001.html', destination: '/basics/properties_prevention/class4_properties', permanent: true },
  { source: '/basics/properties_prevention/class2_petroleum_properties/Otsux_Prop_Class2_Petroleum_Properties_001.html', destination: '/basics/properties_prevention/class2_petroleum_properties', permanent: true },
  { source: '/basics/law/chief_safety_officers/Otsux_Law_Chief_Safety_Officers_001.html', destination: '/basics/law/chief_safety_officers', permanent: true },
  { source: '/basics/law/mobile_tank_storage_standards/Otsux_Law_Mobile_Tank_Storage_Standards_001.html', destination: '/basics/law/mobile_tank_storage_standards', permanent: true },
  { source: '/basics/law/emergency_measures/Otsux_Law_Emergency_Measures_001.html', destination: '/basics/law/emergency_measures', permanent: true },
  { source: '/basics/law/underground_tank_storage_standards/Otsux_Law_Underground_Tank_Storage_Standards_001.html', destination: '/basics/law/underground_tank_storage_standards', permanent: true },
  { source: '/basics/law/transportation_standards/Otsux_Law_Transportation_Standards_001.html', destination: '/basics/law/transportation_standards', permanent: true },
  { source: '/basics/properties_prevention.html', destination: '/basics/properties_prevention', permanent: true },
  { source: '/basics/law/safety_inspections/Otsux_Law_Safety_Inspections_001.html', destination: '/basics/law/safety_inspections', permanent: true },
  { source: '/basics/law/outdoor_tank_storage_standards/Otsux_Law_Outdoor_Tank_Storage_Standards_001.html', destination: '/basics/law/outdoor_tank_storage_standards', permanent: true },
  { source: '/basics/properties_prevention/class3_petroleum_properties/Otsux_Prop_Class3_Petroleum_Properties_001.html', destination: '/basics/properties_prevention/class3_petroleum_properties', permanent: true },
  { source: '/basics/law/safety_distance/Otsux_Law_Safety_Distance_001.html', destination: '/basics/law/safety_distance', permanent: true },
  { source: '/basics/law/tables/revocations_and_suspensions_001.html', destination: '/basics/law/chapter1_summary/revocations_and_suspensions', permanent: true },
  { source: '/basics/law/firefighting_equipment_standards/Otsux_Law_Firefighting_Equipment_Standards_001.html', destination: '/basics/law/firefighting_equipment_standards', permanent: true },
  { source: '/basics/law/preventive_regulations/Otsux_Law_Preventive_Regulations_001.html', destination: '/basics/law/preventive_regulations', permanent: true },
  { source: '/basics/law/designated_quantities/Otsux_Law_Designated_Quantities_001.html', destination: '/basics/law/designated_quantities', permanent: true },
  { source: '/basics/law/alarm_systems/Otsux_Law_Alarm_Systems_001.html', destination: '/basics/law/alarm_systems', permanent: true },
  { source: '/basics/law/tables/license_issuance_001.html', destination: '/basics/law/chapter1_summary/license_issuance', permanent: true },
  { source: '/basics/law/tables/transport_and_transfer_001.html', destination: '/basics/law/chapter1_summary/transport_and_transfer', permanent: true },
  { source: '/basics/law/tables/buffer_areas_001.html', destination: '/basics/law/chapter1_summary/buffer_areas', permanent: true },
  { source: '/basics/law/sales_station_standards/Otsux_Law_Sales_Station_Standards_001.html', destination: '/basics/law/sales_station_standards', permanent: true },
  { source: '/basics/law/tables/appointment_and_lectures_001.html', destination: '/basics/law/chapter1_summary/appointment_and_lectures', permanent: true },
  { source: '/basics/law/simple_tank_storage_standards/Otsux_Law_Simple_Tank_Storage_Standards_001.html', destination: '/basics/law/simple_tank_storage_standards', permanent: true },
  { source: '/basics/law/facility_maintenance_management/Otsux_Law_Facility_Maintenance_Management_001.html', destination: '/basics/law/facility_maintenance_management', permanent: true },
  { source: '/basics/law/notification_of_changes/Otsux_Law_Notification_Of_Changes_001.html', destination: '/basics/law/notification_of_changes', permanent: true },
  { source: '/basics/law/administrative_orders_and_suspensions/Otsux_Law_Administrative_Orders_And_Suspensions_001.html', destination: '/basics/law/administrative_orders_and_suspensions', permanent: true },
  { source: '/basics/properties_prevention/class4_extinguishing_methods/Otsux_Prop_Class4_Extinguishing_Methods_001.html', destination: '/basics/properties_prevention/class4_extinguishing_methods', permanent: true },
  { source: '/basics/law/tables/notifications_and_destinations_001.html', destination: '/basics/law/chapter1_summary/notifications_and_destinations', permanent: true },
  { source: '/basics/properties_prevention/main_class4_dangerous_substances/Otsux_Prop_Main_Class4_Dangerous_Substances_001.html', destination: '/basics/properties_prevention/main_class4_dangerous_substances', permanent: true },
  { source: '/basics/law/tables/operator_categories_001.html', destination: '/basics/law/chapter1_summary/operator_categories', permanent: true },
  { source: '/basics/law/tables/periodic_inspections_001.html', destination: '/basics/law/chapter1_summary/periodic_inspections', permanent: true },
  { source: '/basics/properties_prevention/class4_petroleum_properties/Otsux_Prop_Class4_Petroleum_Properties_001.html', destination: '/basics/properties_prevention/class4_petroleum_properties', permanent: true },
  { source: '/basics/law/tables/plants_appointment_rules_inspections_001.html', destination: '/basics/law/chapter1_summary/plants_appointment_rules_inspections', permanent: true },
  { source: '/basics/law/outdoor_storage_standards/Otsux_Law_Outdoor_Storage_Standards_001.html', destination: '/basics/law/outdoor_storage_standards', permanent: true },
  { source: '/basics/law/general_standards_part1/Otsux_Law_General_Standards_Part1_001.html', destination: '/basics/law/general_standards_part1', permanent: true },
  { source: '/basics/law/tables/proc_and_offices_001.html', destination: '/basics/law/chapter1_summary/proc_and_offices', permanent: true },
  { source: '/basics/properties_prevention/classification_of_dangerous_goods/Otsux_Prop_Classification_Of_Dangerous_Goods_001.html', destination: '/basics/properties_prevention/classification_of_dangerous_goods', permanent: true },
  { source: '/basics/law/legal_framework/Otsux_Law_Legal_Framework_001.html', destination: '/basics/law/legal_framework', permanent: true },
  { source: '/basics/law/preventive_regulation_items/Otsux_Law_Preventive_Regulation_Items_001.html', destination: '/basics/law/preventive_regulation_items', permanent: true },
  { source: '/basics/law/indoor_tank_storage_standards/Otsux_Law_Indoor_Tank_Storage_Standards_001.html', destination: '/basics/law/indoor_tank_storage_standards', permanent: true },
  { source: '/basics/law/handler_certification/Otsux_Law_Handler_Certification_001.html', destination: '/basics/law/handler_certification', permanent: true },
  { source: '/basics/law/chapter1_summary/Otsux_Law_Chapter_Summary_001.html', destination: '/basics/law/chapter1_summary', permanent: true },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return LEGACY_URL_REDIRECTS;
  },
};

export default nextConfig;
