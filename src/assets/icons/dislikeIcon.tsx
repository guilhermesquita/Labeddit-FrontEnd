import { Box } from "@mui/material";

export const DislikeIcon = () => {
  return (
    <Box
      sx={{
        "&:hover svg path": {
          fill: "red",
        },
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
      >
        <path
          d="M8.90918 15.3491C8.17738 16.2731 6.77564 16.2748 6.04186 15.3523L0.934276 8.93092C0.166241 7.9657 0.846037 6.53956 2.07918 6.52748L3.46687 6.51368L3.46811 1.84902C3.46816 1.6086 3.51558 1.37054 3.60767 1.14846C3.69976 0.926372 3.83471 0.724609 4.00481 0.554696C4.1749 0.384784 4.37681 0.250054 4.599 0.158204C4.82118 0.0663541 5.05929 0.0191845 5.29971 0.0193911L9.65799 0.0233342C10.143 0.0238972 10.6079 0.216931 10.9506 0.560034C11.2933 0.903137 11.4859 1.36825 11.4859 1.85321L11.4864 6.5127L12.8418 6.51343C14.0804 6.51417 14.7712 7.94352 14.003 8.91441L8.90918 15.3491ZM6.72412 14.81C6.81401 14.923 6.92827 15.0143 7.05837 15.0769C7.18847 15.1396 7.33104 15.172 7.47545 15.1719C7.61985 15.1717 7.76235 15.1389 7.8923 15.076C8.02225 15.013 8.1363 14.9215 8.22593 14.8083L13.3197 8.37363C13.636 7.97359 13.3518 7.38524 12.8415 7.38475L11.0504 7.38401C10.9931 7.38401 10.9365 7.37275 10.8836 7.35085C10.8307 7.32895 10.7827 7.29685 10.7422 7.25639C10.7017 7.21592 10.6696 7.16788 10.6477 7.115C10.6258 7.06213 10.6146 7.00546 10.6146 6.94823L10.6148 1.85321C10.6148 1.59916 10.5138 1.35552 10.3342 1.17583C10.1546 0.99614 9.91106 0.895094 9.65701 0.894892L5.29872 0.890949C5.1728 0.890855 5.0481 0.915571 4.93173 0.963685C4.81536 1.0118 4.70962 1.08237 4.62053 1.17136C4.53144 1.26036 4.46076 1.36603 4.41253 1.48235C4.3643 1.59867 4.33945 1.72335 4.33942 1.84927L4.33818 6.94527C4.33821 7.06009 4.29291 7.17027 4.21214 7.25187C4.13137 7.33347 4.02165 7.37989 3.90684 7.38105L2.08781 7.39879C1.58006 7.40372 1.3003 7.99109 1.61629 8.38842L6.72412 14.81Z"
          fill="#6F6F6F"
        />
      </svg>
    </Box>
  );
};
