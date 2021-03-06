import React from "react";
import {Typography, Box} from "@material-ui/core";

export default function IndexContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    marginTop:"1rem"
  };

  return (
    <Box textAlign="justify">

      <Typography variant="body2" style={textStyle}>
          I had seen little of Holmes lately. My marriage had drifted us away from each other.
        My own complete happiness, and the home-centred interests which rise up around the man
        who first finds himself master of his own establishment, were sufficient to absorb all
        my attention, while Holmes, who loathed every form of society with his whole Bohemian
        soul, remained in our lodgings in Baker Street, buried among his old books, and
        alternating from week to week between cocaine and ambition, the drowsiness of the
        drug, and the fierce energy of his own keen nature. He was still, as ever, deeply
        attracted by the study of crime, and occupied his immense faculties and extraordinary
        powers of observation in following out those clues, and clearing up those mysteries
        which had been abandoned as hopeless by the official police. From time to time I heard
        some vague account of his doings: of his summons to Odessa in the case of the Trepoff
        murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee,
        and finally of the mission which he had accomplished so delicately and successfully for
        the reigning family of Holland. Beyond these signs of his activity, however, which I
        merely shared with all the readers of the daily press, I knew little of my former
        friend and companion
      </Typography>

      <Typography variant="body2" style={textStyle} component={Box} mt={1}>
        One night—it was on the twentieth of March, 1888—I was returning from a journey to a
        patient (for I had now returned to civil practice), when my way led me through Baker
        Street. As I passed the well-remembered door, which must always be associated in my
        mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized
        with a keen desire to see Holmes again, and to know how he was employing his extraordinary
        powers. His rooms were brilliantly lit, and, even as I looked up, I saw his tall,
        spare figure pass twice in a dark silhouette against the blind. He was pacing the room
        swiftly, eagerly, with his head sunk upon his chest and his hands clasped behind him.
        To me, who knew his every mood and habit, his attitude and manner told their own story.
        He was at work again. He had risen out of his drug-created dreams and was hot upon the
        scent of some new problem. I rang the bell and was shown up to the chamber which had
        formerly been in part my own.
      </Typography>

    </Box>
  );

}

