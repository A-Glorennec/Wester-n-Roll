CREATE TABLE users (
    u_id INT AUTO_INCREMENT PRIMARY KEY,
    u_name VARCHAR(20) NOT NULL,
    u_email VARCHAR(50) NOT NULL UNIQUE,
    u_hashedPassword VARCHAR(255) NOT NULL,
    u_role ENUM('user', 'admin') NOT NULL
);

CREATE TABLE events (
    e_id INT AUTO_INCREMENT PRIMARY KEY,
    e_title VARCHAR(50) NOT NULL,
    e_description TEXT NOT NULL,
    e_date TIMESTAMP NOT NULL,
    e_location VARCHAR(50) NOT NULL
);

CREATE TABLE galleries (
    g_id INT AUTO_INCREMENT PRIMARY KEY,
    g_title VARCHAR(50) NOT NULL,
    g_description TEXT NOT NULL,
    g_type VARCHAR(255) NOT NULL,
    g_image VARCHAR(255) NOT NULL
);

CREATE TABLE images (
    i_id INT AUTO_INCREMENT PRIMARY KEY,
    i_path VARCHAR(255) NOT NULL,
    i_caption VARCHAR(255) NOT NULL,
    i_gallery_id INT NOT NULL,
    date TIMESTAMP NOT NULL,
      CONSTRAINT fk_image_gallery
        FOREIGN KEY (i_gallery_id)
        REFERENCES galleries(g_id) 
        ON DELETE CASCADE
);

CREATE TABLE comments (
    c_id INT AUTO_INCREMENT PRIMARY KEY,
    c_text TEXT NOT NULL,
    c_user_id INT NOT NULL,
    c_image_id INT NOT NULL,
    date TIMESTAMP NOT NULL,
    CONSTRAINT fk_comment_user
      FOREIGN KEY (c_user_id)
      REFERENCES users(u_id),
    CONSTRAINT fk_comment_image
    FOREIGN KEY (c_image_id)
      REFERENCES images(i_id)
      ON DELETE CASCADE
);

CREATE TABLE likes (
    l_id INT AUTO_INCREMENT PRIMARY KEY,
    l_user_id INT NOT NULL,
    l_image_id INT NOT NULL,
    date TIMESTAMP NOT NULL,
    CONSTRAINT fk_like_user
      FOREIGN KEY (l_user_id)
      REFERENCES users(u_id),
    CONSTRAINT fk_like_image
      FOREIGN KEY (l_image_id)
      REFERENCES images(i_id)
      ON DELETE CASCADE
    
);
