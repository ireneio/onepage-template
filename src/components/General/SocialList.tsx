const contacts = [
  { image: '/images/ct_wx.png', value: '' },
  { image: '/images/ct_telegram.png', value: '' },
  { image: '/images/ct_skype.png', value: '' },
  { image: '/images/ct_whasapp.png', value: '' },
  { image: '/images/ct_bbm.png', value: '' },
];

const SocialList = () => {
  return (
    <div className="absolute right-[24px] bottom-[12px] flex w-[300px] justify-between">
      {contacts.map((contact, idx) => {
        return (
          <a key={idx} href={contact.value} target="_blank" rel="noreferrer">
            <img src={contact.image} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialList;
