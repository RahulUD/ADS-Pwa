import React, { useEffect } from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import UserFormCard from "components/Form/UserFormCard";
import AcademicForm from "components/Form/AcademicForm";
import ParentForm from "components/Form/ParentForm";
import AddressForm from "components/Form/AddressForm";
import { connect } from "react-redux";
import InfoCard from "components/Cards/InfoCard";

function Admission({ user, progress, documents, student, guardians, contacts, addresses }) {
  useEffect(() => {

  }, [progress, user, documents, student, guardians, contacts, addresses])
  return (
    <>
      <HeaderStatsEmpty />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex">
                  <h6 className="text-gray-800 text-xl font-bold">Admission</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {progress === 0 && <UserFormCard />}
                {progress === 1 && <AcademicForm />}
                {progress === 2 && <ParentForm />}
                {progress === 3 && <AddressForm />}
              </div>
            </div>
          </div>
          <div className="pt-6 w-full lg:w-4/12 px-4 text-left">
            {user && <InfoCard title={user.name}>
              <div className="flex-grow p-3">
                <div className="text-sm text-gray-500">
                  Email : {user.email}
                </div>
                <div className="text-sm text-gray-500">
                  DOB : {user.date_of_birth}
                </div>
                <div className="text-sm text-gray-500">
                  Gender : {user.gender.name}
                </div>
              </div>
            </InfoCard>}

            {student && <InfoCard title={`Academic Detail`}>
              <div className="flex-grow p-3">
                <div className="text-sm text-gray-500">
                  STD : {student.std.name}
                </div>
                <div className="text-sm text-gray-500">
                  Roll Number : {student.roll_number}
                </div>
                <div className="text-sm text-gray-500">
                  Day-cum-boarding : {student.scholor.name}
                </div>
                <div className="text-sm text-gray-500">
                  Transport : {student.transport.name}
                </div>
                {student.mother_name && <div className="text-sm text-gray-500">
                  Mother Name : {student.mother_name}
                </div>}
                {student.father_name && <div className="text-sm text-gray-500">
                  Father Name : {student.father_name}
                </div>}
                {student?.relation?.type && <div className="text-sm text-gray-500">
                  {student?.relation?.type} : {student.guardian_name}
                </div>}
              </div>
            </InfoCard>}

            {contacts[0] && <InfoCard title={`Contacts`}>
              <div className="flex-grow p-3">
                {contacts.map(contact => (<div className="text-sm text-gray-500">
                  {contact.name} : {contact.contact}
                </div>))}
              </div>
            </InfoCard>}

            {addresses[0] && <InfoCard title={`Address`}>
              <div className="flex-grow p-3">
                {addresses.map(address => (<div className="text-sm text-gray-500">
                  <div className="flex-grow p-3">
                    <div className="text-sm text-gray-500">
                      Address 1 : {address.address1}
                    </div>
                    <div className="text-sm text-gray-500">
                      Address 2 : {address.address2}
                    </div>
                    <div className="text-sm text-gray-500">
                      {`State : ${address.pin.state}, District ${address.pin.district}, Sub district ${address.pin.sub_district}, Pin : ${address.pin.pin}`}
                    </div>
                  </div>
                </div>))}
              </div>
            </InfoCard>}

            {documents[0] && <InfoCard title={`Documents`}>
              <div className="flex-grow p-3">
                {documents.map(document => (<div className="text-sm text-gray-500">
                  {document.name} : {document.number}
                </div>))}
              </div>
            </InfoCard>}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const Member = state.MemberReducer;
  return {
    progress: Member.progress,
    user: Member.user,
    documents: Member.documents,
    student: Member.student,
    guardians: Member.guardians,
    contacts: Member.contacts,
    addresses: Member.addresses,
  };
};

export default connect(
  mapStateToProps,
  null
)(Admission);