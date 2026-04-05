/* Province / District data used by the checkout form */

const PROVINCES_OLD = {
    "An Giang": ["TP. Long Xuyên","TX. Châu Đốc","TX. Tân Châu","H. An Phú","H. Châu Phú","H. Châu Thành","H. Chợ Mới","H. Phú Tân","H. Thoại Sơn","H. Tịnh Biên","H. Tri Tôn"],
    "Bà Rịa - Vũng Tàu": ["TP. Vũng Tàu","TP. Bà Rịa","TX. Phú Mỹ","H. Châu Đức","H. Côn Đảo","H. Đất Đỏ","H. Long Điền","H. Xuyên Mộc"],
    "Bắc Giang": ["TP. Bắc Giang","H. Hiệp Hòa","H. Lạng Giang","H. Lục Nam","H. Lục Ngạn","H. Sơn Động","H. Tân Yên","H. Việt Yên","H. Yên Dũng","H. Yên Thế"],
    "Bắc Kạn": ["TP. Bắc Kạn","H. Ba Bể","H. Bạch Thông","H. Chợ Đồn","H. Chợ Mới","H. Na Rì","H. Ngân Sơn","H. Pắc Nặm"],
    "Bạc Liêu": ["TP. Bạc Liêu","H. Đông Hải","H. Giá Rai","H. Hòa Bình","H. Hồng Dân","H. Phước Long","H. Vĩnh Lợi"],
    "Bắc Ninh": ["TP. Bắc Ninh","TX. Từ Sơn","H. Gia Bình","H. Lương Tài","H. Quế Võ","H. Thuận Thành","H. Tiên Du","H. Yên Phong"],
    "Bến Tre": ["TP. Bến Tre","H. Ba Tri","H. Bình Đại","H. Châu Thành","H. Chợ Lách","H. Giồng Trôm","H. Mỏ Cày Bắc","H. Mỏ Cày Nam","H. Thạnh Phú"],
    "Bình Định": ["TP. Quy Nhơn","TX. An Nhơn","TX. Hoài Nhơn","H. An Lão","H. Hoài Ân","H. Phù Cát","H. Phù Mỹ","H. Tây Sơn","H. Tuy Phước","H. Vân Canh","H. Vĩnh Thạnh"],
    "Bình Dương": ["TP. Thủ Dầu Một","TP. Dĩ An","TP. Thuận An","TX. Bến Cát","TX. Tân Uyên","H. Bàu Bàng","H. Bắc Tân Uyên","H. Dầu Tiếng","H. Phú Giáo"],
    "Bình Phước": ["TP. Đồng Xoài","TX. Bình Long","TX. Phước Long","H. Bù Đăng","H. Bù Đốp","H. Bù Gia Mập","H. Chơn Thành","H. Đồng Phú","H. Hớn Quản","H. Lộc Ninh","H. Phú Riềng"],
    "Bình Thuận": ["TP. Phan Thiết","TX. La Gi","H. Bắc Bình","H. Đức Linh","H. Hàm Tân","H. Hàm Thuận Bắc","H. Hàm Thuận Nam","H. Phú Quí","H. Tánh Linh","H. Tuy Phong"],
    "Cà Mau": ["TP. Cà Mau","H. Cái Nước","H. Đầm Dơi","H. Năm Căn","H. Ngọc Hiển","H. Phú Tân","H. Thới Bình","H. Trần Văn Thời","H. U Minh"],
    "Cao Bằng": ["TP. Cao Bằng","H. Bảo Lâm","H. Bảo Lạc","H. Hà Quảng","H. Hạ Lang","H. Hòa An","H. Nguyên Bình","H. Quảng Hòa","H. Thạch An","H. Trùng Khánh"],
    "Cần Thơ": ["Q. Ninh Kiều","Q. Bình Thủy","Q. Cái Răng","Q. Ô Môn","Q. Thốt Nốt","H. Cờ Đỏ","H. Phong Điền","H. Thới Lai","H. Vĩnh Thạnh"],
    "Đà Nẵng": ["Q. Hải Châu","Q. Thanh Khê","Q. Sơn Trà","Q. Ngũ Hành Sơn","Q. Liên Chiểu","Q. Cẩm Lệ","H. Hòa Vang","H. Hoàng Sa"],
    "Đắk Lắk": ["TP. Buôn Ma Thuột","TX. Buôn Hồ","H. Buôn Đôn","H. Cư Kuin","H. Cư M'gar","H. Ea H'leo","H. Ea Kar","H. Ea Súp","H. Krông Ana","H. Krông Bông","H. Krông Búk","H. Krông Năng","H. Krông Pắc","H. Lắk","H. M'Đrắk"],
    "Đắk Nông": ["TP. Gia Nghĩa","H. Cư Jút","H. Đắk Glong","H. Đắk Mil","H. Đắk R'Lấp","H. Đắk Song","H. Krông Nô","H. Tuy Đức"],
    "Điện Biên": ["TP. Điện Biên Phủ","TX. Mường Lay","H. Điện Biên","H. Điện Biên Đông","H. Mường Ảng","H. Mường Chà","H. Mường Nhé","H. Nậm Pồ","H. Tủa Chùa","H. Tuần Giáo"],
    "Đồng Nai": ["TP. Biên Hòa","TP. Long Khánh","H. Cẩm Mỹ","H. Định Quán","H. Long Thành","H. Nhơn Trạch","H. Tân Phú","H. Thống Nhất","H. Trảng Bom","H. Vĩnh Cửu","H. Xuân Lộc"],
    "Đồng Tháp": ["TP. Cao Lãnh","TP. Sa Đéc","TX. Hồng Ngự","H. Cao Lãnh","H. Châu Thành","H. Hồng Ngự","H. Lai Vung","H. Lấp Vò","H. Tam Nông","H. Tân Hồng","H. Thanh Bình","H. Tháp Mười"],
    "Gia Lai": ["TP. Pleiku","TX. An Khê","TX. Ayun Pa","H. Chư Păh","H. Chư Prông","H. Chư Pưh","H. Chư Sê","H. Đắk Đoa","H. Đắk Pơ","H. Đức Cơ","H. Ia Grai","H. Ia Pa","H. K'Bang","H. Kông Chro","H. Mang Yang","H. Phú Thiện"],
    "Hà Giang": ["TP. Hà Giang","H. Bắc Mê","H. Bắc Quang","H. Đồng Văn","H. Hoàng Su Phì","H. Mèo Vạc","H. Quản Bạ","H. Quang Bình","H. Vị Xuyên","H. Xín Mần","H. Yên Minh"],
    "Hà Nam": ["TP. Phủ Lý","TX. Duy Tiên","H. Bình Lục","H. Kim Bảng","H. Lý Nhân","H. Thanh Liêm"],
    "Hà Nội": ["Q. Ba Đình","Q. Hoàn Kiếm","Q. Hai Bà Trưng","Q. Đống Đa","Q. Tây Hồ","Q. Cầu Giấy","Q. Thanh Xuân","Q. Hoàng Mai","Q. Long Biên","Q. Nam Từ Liêm","Q. Bắc Từ Liêm","Q. Hà Đông","TX. Sơn Tây","H. Ba Vì","H. Chương Mỹ","H. Đan Phượng","H. Đông Anh","H. Gia Lâm","H. Hoài Đức","H. Mê Linh","H. Mỹ Đức","H. Phú Xuyên","H. Phúc Thọ","H. Quốc Oai","H. Sóc Sơn","H. Thạch Thất","H. Thanh Oai","H. Thanh Trì","H. Thường Tín","H. Ứng Hòa"],
    "Hà Tĩnh": ["TP. Hà Tĩnh","TX. Hồng Lĩnh","TX. Kỳ Anh","H. Cẩm Xuyên","H. Can Lộc","H. Đức Thọ","H. Hương Khê","H. Hương Sơn","H. Kỳ Anh","H. Lộc Hà","H. Nghi Xuân","H. Thạch Hà","H. Vũ Quang"],
    "Hải Dương": ["TP. Hải Dương","TX. Chí Linh","H. Bình Giang","H. Cẩm Giàng","H. Gia Lộc","H. Kim Thành","H. Kinh Môn","H. Nam Sách","H. Ninh Giang","H. Thanh Hà","H. Thanh Miện","H. Tứ Kỳ"],
    "Hải Phòng": ["Q. Hồng Bàng","Q. Lê Chân","Q. Ngô Quyền","Q. Kiến An","Q. Hải An","Q. Đồ Sơn","Q. Dương Kinh","H. An Dương","H. An Lão","H. Bạch Long Vĩ","H. Cát Hải","H. Kiến Thụy","H. Tiên Lãng","H. Thủy Nguyên","H. Vĩnh Bảo"],
    "Hậu Giang": ["TP. Vị Thanh","TX. Long Mỹ","TX. Ngã Bảy","H. Châu Thành","H. Châu Thành A","H. Long Mỹ","H. Phụng Hiệp","H. Vị Thủy"],
    "Hòa Bình": ["TP. Hòa Bình","H. Cao Phong","H. Đà Bắc","H. Kim Bôi","H. Lạc Sơn","H. Lạc Thủy","H. Lương Sơn","H. Mai Châu","H. Tân Lạc","H. Yên Thủy"],
    "Hưng Yên": ["TP. Hưng Yên","H. Ân Thi","H. Kim Động","H. Khoái Châu","H. Mỹ Hào","H. Phù Cừ","H. Tiên Lữ","H. Văn Giang","H. Văn Lâm","H. Yên Mỹ"],
    "Khánh Hòa": ["TP. Nha Trang","TP. Cam Ranh","TX. Ninh Hòa","H. Cam Lâm","H. Diên Khánh","H. Khánh Sơn","H. Khánh Vĩnh","H. Trường Sa","H. Vạn Ninh"],
    "Kiên Giang": ["TP. Rạch Giá","TX. Hà Tiên","TX. Phú Quốc","H. An Biên","H. An Minh","H. Châu Thành","H. Giang Thành","H. Giồng Riềng","H. Gò Quao","H. Hòn Đất","H. Kiên Hải","H. Kiên Lương","H. Tân Hiệp","H. U Minh Thượng","H. Vĩnh Thuận"],
    "Kon Tum": ["TP. Kon Tum","H. Đắk Glei","H. Đắk Hà","H. Đắk Tô","H. Ia H'Drai","H. Kon Plông","H. Kon Rẫy","H. Ngọc Hồi","H. Sa Thầy","H. Tu Mơ Rông"],
    "Lai Châu": ["TP. Lai Châu","H. Mường Tè","H. Nậm Nhùn","H. Phong Thổ","H. Sìn Hồ","H. Tam Đường","H. Tân Uyên","H. Than Uyên"],
    "Lâm Đồng": ["TP. Đà Lạt","TP. Bảo Lộc","H. Bảo Lâm","H. Cát Tiên","H. Đam Rông","H. Di Linh","H. Đơn Dương","H. Đức Trọng","H. Lạc Dương","H. Lâm Hà","H. Đạ Huoai","H. Đạ Tẻh"],
    "Lạng Sơn": ["TP. Lạng Sơn","H. Bắc Sơn","H. Bình Gia","H. Cao Lộc","H. Chi Lăng","H. Đình Lập","H. Hữu Lũng","H. Lộc Bình","H. Tràng Định","H. Văn Lãng","H. Văn Quan"],
    "Lào Cai": ["TP. Lào Cai","TX. Sa Pa","H. Bắc Hà","H. Bảo Thắng","H. Bảo Yên","H. Mường Khương","H. Si Ma Cai","H. Văn Bàn","H. Bát Xát"],
    "Long An": ["TP. Tân An","TX. Kiến Tường","H. Bến Lức","H. Cần Đước","H. Cần Giuộc","H. Châu Thành","H. Đức Hòa","H. Đức Huệ","H. Mộc Hóa","H. Tân Hưng","H. Tân Thạnh","H. Tân Trụ","H. Thạnh Hóa","H. Thủ Thừa","H. Vĩnh Hưng"],
    "Nam Định": ["TP. Nam Định","H. Giao Thủy","H. Hải Hậu","H. Mỹ Lộc","H. Nam Trực","H. Nghĩa Hưng","H. Trực Ninh","H. Vụ Bản","H. Xuân Trường","H. Ý Yên"],
    "Nghệ An": ["TP. Vinh","TX. Cửa Lò","TX. Hoàng Mai","TX. Thái Hòa","H. Anh Sơn","H. Con Cuông","H. Diễn Châu","H. Đô Lương","H. Hưng Nguyên","H. Kỳ Sơn","H. Nam Đàn","H. Nghi Lộc","H. Nghĩa Đàn","H. Quế Phong","H. Quỳ Châu","H. Quỳ Hợp","H. Quỳnh Lưu","H. Tân Kỳ","H. Thanh Chương","H. Tương Dương","H. Yên Thành"],
    "Ninh Bình": ["TP. Ninh Bình","TP. Tam Điệp","H. Gia Viễn","H. Hoa Lư","H. Kim Sơn","H. Nho Quan","H. Yên Khánh","H. Yên Mô"],
    "Ninh Thuận": ["TP. Phan Rang-Tháp Chàm","H. Bác Ái","H. Ninh Hải","H. Ninh Phước","H. Ninh Sơn","H. Thuận Bắc","H. Thuận Nam"],
    "Phú Thọ": ["TP. Việt Trì","TX. Phú Thọ","H. Cẩm Khê","H. Đoan Hùng","H. Hạ Hòa","H. Lâm Thao","H. Phù Ninh","H. Tam Nông","H. Tân Sơn","H. Thanh Ba","H. Thanh Sơn","H. Thanh Thủy","H. Yên Lập"],
    "Phú Yên": ["TP. Tuy Hòa","TX. Sông Cầu","H. Đồng Xuân","H. Phú Hòa","H. Sông Hinh","H. Sơn Hòa","H. Tây Hòa","H. Tuy An","H. Đông Hòa"],
    "Quảng Bình": ["TP. Đồng Hới","TX. Ba Đồn","H. Bố Trạch","H. Lệ Thủy","H. Minh Hóa","H. Quảng Ninh","H. Quảng Trạch","H. Tuyên Hóa"],
    "Quảng Nam": ["TP. Tam Kỳ","TP. Hội An","TX. Điện Bàn","H. Bắc Trà My","H. Duy Xuyên","H. Đại Lộc","H. Đông Giang","H. Hiệp Đức","H. Nam Giang","H. Nam Trà My","H. Núi Thành","H. Phú Ninh","H. Phước Sơn","H. Quế Sơn","H. Tây Giang","H. Thăng Bình","H. Tiên Phước","H. Nông Sơn"],
    "Quảng Ngãi": ["TP. Quảng Ngãi","H. Ba Tơ","H. Bình Sơn","H. Đức Phổ","H. Lý Sơn","H. Minh Long","H. Mộ Đức","H. Nghĩa Hành","H. Sơn Hà","H. Sơn Tây","H. Sơn Tịnh","H. Trà Bồng","H. Tư Nghĩa"],
    "Quảng Ninh": ["TP. Hạ Long","TP. Móng Cái","TP. Cẩm Phả","TP. Uông Bí","TX. Đông Triều","TX. Quảng Yên","H. Ba Chẽ","H. Bình Liêu","H. Cô Tô","H. Đầm Hà","H. Hải Hà","H. Tiên Yên"],
    "Quảng Trị": ["TP. Đông Hà","TX. Quảng Trị","H. Cam Lộ","H. Cồn Cỏ","H. Đakrông","H. Gio Linh","H. Hải Lăng","H. Hướng Hóa","H. Triệu Phong","H. Vĩnh Linh"],
    "Sóc Trăng": ["TP. Sóc Trăng","TX. Ngã Năm","TX. Vĩnh Châu","H. Châu Thành","H. Cù Lao Dung","H. Kế Sách","H. Long Phú","H. Mỹ Tú","H. Mỹ Xuyên","H. Thạnh Trị","H. Trần Đề"],
    "Sơn La": ["TP. Sơn La","H. Bắc Yên","H. Mai Sơn","H. Mộc Châu","H. Mường La","H. Phù Yên","H. Quỳnh Nhai","H. Sông Mã","H. Sốp Cộp","H. Thuận Châu","H. Vân Hồ","H. Yên Châu"],
    "Tây Ninh": ["TP. Tây Ninh","TX. Trảng Bàng","H. Bến Cầu","H. Châu Thành","H. Dương Minh Châu","H. Gò Dầu","H. Hòa Thành","H. Tân Biên","H. Tân Châu"],
    "Thái Bình": ["TP. Thái Bình","H. Đông Hưng","H. Hưng Hà","H. Kiến Xương","H. Quỳnh Phụ","H. Thái Thụy","H. Tiền Hải","H. Vũ Thư"],
    "Thái Nguyên": ["TP. Thái Nguyên","TX. Phổ Yên","TX. Sông Công","H. Định Hóa","H. Đồng Hỷ","H. Phú Bình","H. Phú Lương","H. Đại Từ","H. Võ Nhai"],
    "Thanh Hóa": ["TP. Thanh Hóa","TX. Bỉm Sơn","TX. Sầm Sơn","H. Bá Thước","H. Cẩm Thủy","H. Đông Sơn","H. Hà Trung","H. Hậu Lộc","H. Hoằng Hóa","H. Lang Chánh","H. Mường Lát","H. Nga Sơn","H. Ngọc Lặc","H. Như Thanh","H. Như Xuân","H. Nông Cống","H. Quan Hóa","H. Quan Sơn","H. Quảng Xương","H. Thạch Thành","H. Thiệu Hóa","H. Thọ Xuân","H. Thường Xuân","H. Tĩnh Gia","H. Triệu Sơn","H. Vĩnh Lộc","H. Yên Định"],
    "Thừa Thiên Huế": ["TP. Huế","TX. Hương Thủy","TX. Hương Trà","H. A Lưới","H. Nam Đông","H. Phong Điền","H. Phú Lộc","H. Phú Vang","H. Quảng Điền"],
    "Tiền Giang": ["TP. Mỹ Tho","TX. Cai Lậy","TX. Gò Công","H. Cái Bè","H. Cai Lậy","H. Châu Thành","H. Chợ Gạo","H. Gò Công Đông","H. Gò Công Tây","H. Tân Phú Đông","H. Tân Phước"],
    "TP. Hồ Chí Minh": ["Q. 1","Q. 3","Q. 4","Q. 5","Q. 6","Q. 7","Q. 8","Q. 10","Q. 11","Q. 12","Q. Bình Thạnh","Q. Bình Tân","Q. Gò Vấp","Q. Phú Nhuận","Q. Tân Bình","Q. Tân Phú","TP. Thủ Đức","H. Bình Chánh","H. Củ Chi","H. Hóc Môn","H. Nhà Bè","H. Cần Giờ"],
    "Trà Vinh": ["TP. Trà Vinh","TX. Duyên Hải","H. Càng Long","H. Cầu Kè","H. Cầu Ngang","H. Châu Thành","H. Tiểu Cần","H. Trà Cú"],
    "Tuyên Quang": ["TP. Tuyên Quang","H. Chiêm Hóa","H. Hàm Yên","H. Lâm Bình","H. Na Hang","H. Sơn Dương","H. Yên Sơn"],
    "Vĩnh Long": ["TP. Vĩnh Long","TX. Bình Minh","H. Bình Tân","H. Long Hồ","H. Mang Thít","H. Tam Bình","H. Trà Ôn","H. Vũng Liêm"],
    "Vĩnh Phúc": ["TP. Vĩnh Yên","TX. Phúc Yên","H. Bình Xuyên","H. Lập Thạch","H. Sông Lô","H. Tam Dương","H. Tam Đảo","H. Vĩnh Tường","H. Yên Lạc"],
    "Yên Bái": ["TP. Yên Bái","TX. Nghĩa Lộ","H. Lục Yên","H. Mù Căng Chải","H. Trấn Yên","H. Trạm Tấu","H. Văn Chấn","H. Văn Yên","H. Yên Bình"]
};

const PROVINCES_NEW = {
    "An Giang": [
        "TP. Long Xuyên","TX. Châu Đốc","TX. Tân Châu","H. An Phú","H. Châu Phú","H. Châu Thành (AG)","H. Chợ Mới","H. Phú Tân (AG)","H. Thoại Sơn","H. Tịnh Biên","H. Tri Tôn",
        "TP. Rạch Giá","TX. Hà Tiên","TX. Phú Quốc","H. An Biên","H. An Minh","H. Châu Thành (KG)","H. Giang Thành","H. Giồng Riềng","H. Gò Quao","H. Hòn Đất","H. Kiên Hải","H. Kiên Lương","H. Tân Hiệp","H. U Minh Thượng","H. Vĩnh Thuận"
    ],
    "Bắc Ninh": [
        "TP. Bắc Ninh","TX. Từ Sơn","H. Gia Bình","H. Lương Tài","H. Quế Võ","H. Thuận Thành","H. Tiên Du","H. Yên Phong",
        "TP. Bắc Giang","H. Hiệp Hòa","H. Lạng Giang","H. Lục Nam","H. Lục Ngạn","H. Sơn Động","H. Tân Yên","H. Việt Yên","H. Yên Dũng","H. Yên Thế"
    ],
    "Cà Mau": [
        "TP. Bạc Liêu","H. Đông Hải","H. Giá Rai","H. Hòa Bình (BL)","H. Hồng Dân","H. Phước Long (BL)","H. Vĩnh Lợi",
        "TP. Cà Mau","H. Cái Nước","H. Đầm Dơi","H. Năm Căn","H. Ngọc Hiển","H. Phú Tân (CM)","H. Thới Bình","H. Trần Văn Thời","H. U Minh"
    ],
    "Cao Bằng": ["TP. Cao Bằng","H. Bảo Lâm","H. Bảo Lạc","H. Hà Quảng","H. Hạ Lang","H. Hòa An","H. Nguyên Bình","H. Quảng Hòa","H. Thạch An","H. Trùng Khánh"],
    "Cần Thơ": [
        "Q. Ninh Kiều","Q. Bình Thủy","Q. Cái Răng","Q. Ô Môn","Q. Thốt Nốt","H. Cờ Đỏ","H. Phong Điền","H. Thới Lai","H. Vĩnh Thạnh",
        "TP. Vị Thanh","TX. Long Mỹ","TX. Ngã Bảy","H. Châu Thành (HG)","H. Châu Thành A","H. Long Mỹ","H. Phụng Hiệp","H. Vị Thủy",
        "TP. Sóc Trăng","TX. Ngã Năm","TX. Vĩnh Châu","H. Châu Thành (ST)","H. Cù Lao Dung","H. Kế Sách","H. Long Phú","H. Mỹ Tú","H. Mỹ Xuyên","H. Thạnh Trị","H. Trần Đề"
    ],
    "Đà Nẵng": ["Q. Hải Châu","Q. Thanh Khê","Q. Sơn Trà","Q. Ngũ Hành Sơn","Q. Liên Chiểu","Q. Cẩm Lệ","H. Hòa Vang","H. Hoàng Sa"],
    "Đắk Lắk": [
        "TP. Buôn Ma Thuột","TX. Buôn Hồ","H. Buôn Đôn","H. Cư Kuin","H. Cư M'gar","H. Ea H'leo","H. Ea Kar","H. Ea Súp","H. Krông Ana","H. Krông Bông","H. Krông Búk","H. Krông Năng","H. Krông Pắc","H. Lắk","H. M'Đrắk",
        "TP. Tuy Hòa","TX. Sông Cầu","H. Đồng Xuân","H. Phú Hòa","H. Sông Hinh","H. Sơn Hòa","H. Tây Hòa","H. Tuy An","H. Đông Hòa"
    ],
    "Điện Biên": ["TP. Điện Biên Phủ","TX. Mường Lay","H. Điện Biên","H. Điện Biên Đông","H. Mường Ảng","H. Mường Chà","H. Mường Nhé","H. Nậm Pồ","H. Tủa Chùa","H. Tuần Giáo"],
    "Đồng Nai": [
        "TP. Biên Hòa","TP. Long Khánh","H. Cẩm Mỹ","H. Định Quán","H. Long Thành","H. Nhơn Trạch","H. Tân Phú (ĐN)","H. Thống Nhất","H. Trảng Bom","H. Vĩnh Cửu","H. Xuân Lộc",
        "TP. Đồng Xoài","TX. Bình Long","TX. Phước Long","H. Bù Đăng","H. Bù Đốp","H. Bù Gia Mập","H. Chơn Thành","H. Đồng Phú","H. Hớn Quản","H. Lộc Ninh","H. Phú Riềng"
    ],
    "Đồng Tháp": [
        "TP. Mỹ Tho","TX. Cai Lậy","TX. Gò Công","H. Cái Bè","H. Cai Lậy","H. Châu Thành (TG)","H. Chợ Gạo","H. Gò Công Đông","H. Gò Công Tây","H. Tân Phú Đông","H. Tân Phước",
        "TP. Cao Lãnh","TP. Sa Đéc","TX. Hồng Ngự","H. Cao Lãnh","H. Châu Thành (ĐT)","H. Hồng Ngự","H. Lai Vung","H. Lấp Vò","H. Tam Nông","H. Tân Hồng","H. Thanh Bình","H. Tháp Mười"
    ],
    "Gia Lai": [
        "TP. Tam Kỳ","TP. Hội An","TX. Điện Bàn","H. Bắc Trà My","H. Duy Xuyên","H. Đại Lộc","H. Đông Giang","H. Hiệp Đức","H. Nam Giang","H. Nam Trà My","H. Núi Thành","H. Phú Ninh","H. Phước Sơn","H. Quế Sơn","H. Tây Giang","H. Thăng Bình","H. Tiên Phước","H. Nông Sơn",
        "TP. Quy Nhơn","TX. An Nhơn","TX. Hoài Nhơn","H. An Lão","H. Hoài Ân","H. Phù Cát","H. Phù Mỹ","H. Tây Sơn","H. Tuy Phước","H. Vân Canh","H. Vĩnh Thạnh",
        "TP. Pleiku","TX. An Khê","TX. Ayun Pa","H. Chư Păh","H. Chư Prông","H. Chư Pưh","H. Chư Sê","H. Đắk Đoa","H. Đắk Pơ","H. Đức Cơ","H. Ia Grai","H. Ia Pa","H. K'Bang","H. Kông Chro","H. Mang Yang","H. Phú Thiện"
    ],
    "Hà Nội": ["Q. Ba Đình","Q. Hoàn Kiếm","Q. Hai Bà Trưng","Q. Đống Đa","Q. Tây Hồ","Q. Cầu Giấy","Q. Thanh Xuân","Q. Hoàng Mai","Q. Long Biên","Q. Nam Từ Liêm","Q. Bắc Từ Liêm","Q. Hà Đông","TX. Sơn Tây","H. Ba Vì","H. Chương Mỹ","H. Đan Phượng","H. Đông Anh","H. Gia Lâm","H. Hoài Đức","H. Mê Linh","H. Mỹ Đức","H. Phú Xuyên","H. Phúc Thọ","H. Quốc Oai","H. Sóc Sơn","H. Thạch Thất","H. Thanh Oai","H. Thanh Trì","H. Thường Tín","H. Ứng Hòa"],
    "Hà Tĩnh": ["TP. Hà Tĩnh","TX. Hồng Lĩnh","TX. Kỳ Anh","H. Cẩm Xuyên","H. Can Lộc","H. Đức Thọ","H. Hương Khê","H. Hương Sơn","H. Kỳ Anh","H. Lộc Hà","H. Nghi Xuân","H. Thạch Hà","H. Vũ Quang"],
    "Hải Phòng": [
        "Q. Hồng Bàng","Q. Lê Chân","Q. Ngô Quyền","Q. Kiến An","Q. Hải An","Q. Đồ Sơn","Q. Dương Kinh","H. An Dương","H. An Lão","H. Bạch Long Vĩ","H. Cát Hải","H. Kiến Thụy","H. Tiên Lãng","H. Thủy Nguyên","H. Vĩnh Bảo",
        "TP. Hải Dương","TX. Chí Linh","H. Bình Giang","H. Cẩm Giàng","H. Gia Lộc","H. Kim Thành","H. Kinh Môn","H. Nam Sách","H. Ninh Giang","H. Thanh Hà","H. Thanh Miện","H. Tứ Kỳ"
    ],
    "Huế": ["TP. Huế","TX. Hương Thủy","TX. Hương Trà","H. A Lưới","H. Nam Đông","H. Phong Điền","H. Phú Lộc","H. Phú Vang","H. Quảng Điền"],
    "Hưng Yên": [
        "TP. Hưng Yên","H. Ân Thi","H. Kim Động","H. Khoái Châu","H. Mỹ Hào","H. Phù Cừ","H. Tiên Lữ","H. Văn Giang","H. Văn Lâm","H. Yên Mỹ",
        "TP. Thái Bình","H. Đông Hưng","H. Hưng Hà","H. Kiến Xương","H. Quỳnh Phụ","H. Thái Thụy","H. Tiền Hải","H. Vũ Thư"
    ],
    "Khánh Hòa": [
        "TP. Nha Trang","TP. Cam Ranh","TX. Ninh Hòa","H. Cam Lâm","H. Diên Khánh","H. Khánh Sơn","H. Khánh Vĩnh","H. Trường Sa","H. Vạn Ninh",
        "TP. Phan Rang-Tháp Chàm","H. Bác Ái","H. Ninh Hải","H. Ninh Phước","H. Ninh Sơn","H. Thuận Bắc","H. Thuận Nam"
    ],
    "Lai Châu": ["TP. Lai Châu","H. Mường Tè","H. Nậm Nhùn","H. Phong Thổ","H. Sìn Hồ","H. Tam Đường","H. Tân Uyên","H. Than Uyên"],
    "Lâm Đồng": [
        "TP. Đà Lạt","TP. Bảo Lộc","H. Bảo Lâm","H. Cát Tiên","H. Đam Rông","H. Di Linh","H. Đơn Dương","H. Đức Trọng","H. Lạc Dương","H. Lâm Hà","H. Đạ Huoai","H. Đạ Tẻh",
        "TP. Phan Thiết","TX. La Gi","H. Bắc Bình","H. Đức Linh","H. Hàm Tân","H. Hàm Thuận Bắc","H. Hàm Thuận Nam","H. Phú Quí","H. Tánh Linh","H. Tuy Phong",
        "TP. Gia Nghĩa","H. Cư Jút","H. Đắk Glong","H. Đắk Mil","H. Đắk R'Lấp","H. Đắk Song","H. Krông Nô","H. Tuy Đức"
    ],
    "Lạng Sơn": ["TP. Lạng Sơn","H. Bắc Sơn","H. Bình Gia","H. Cao Lộc","H. Chi Lăng","H. Đình Lập","H. Hữu Lũng","H. Lộc Bình","H. Tràng Định","H. Văn Lãng","H. Văn Quan"],
    "Lào Cai": [
        "TP. Lào Cai","TX. Sa Pa","H. Bắc Hà","H. Bảo Thắng","H. Bảo Yên","H. Mường Khương","H. Si Ma Cai","H. Văn Bàn","H. Bát Xát",
        "TP. Yên Bái","TX. Nghĩa Lộ","H. Lục Yên","H. Mù Căng Chải","H. Trấn Yên","H. Trạm Tấu","H. Văn Chấn","H. Văn Yên","H. Yên Bình"
    ],
    "Nghệ An": ["TP. Vinh","TX. Cửa Lò","TX. Hoàng Mai","TX. Thái Hòa","H. Anh Sơn","H. Con Cuông","H. Diễn Châu","H. Đô Lương","H. Hưng Nguyên","H. Kỳ Sơn","H. Nam Đàn","H. Nghi Lộc","H. Nghĩa Đàn","H. Quế Phong","H. Quỳ Châu","H. Quỳ Hợp","H. Quỳnh Lưu","H. Tân Kỳ","H. Thanh Chương","H. Tương Dương","H. Yên Thành"],
    "Ninh Bình": [
        "TP. Phủ Lý","TX. Duy Tiên","H. Bình Lục","H. Kim Bảng","H. Lý Nhân","H. Thanh Liêm",
        "TP. Nam Định","H. Giao Thủy","H. Hải Hậu","H. Mỹ Lộc","H. Nam Trực","H. Nghĩa Hưng","H. Trực Ninh","H. Vụ Bản","H. Xuân Trường","H. Ý Yên",
        "TP. Ninh Bình","TP. Tam Điệp","H. Gia Viễn","H. Hoa Lư","H. Kim Sơn","H. Nho Quan","H. Yên Khánh","H. Yên Mô"
    ],
    "Phú Thọ": [
        "TP. Vĩnh Yên","TX. Phúc Yên","H. Bình Xuyên","H. Lập Thạch","H. Sông Lô","H. Tam Dương","H. Tam Đảo","H. Vĩnh Tường","H. Yên Lạc",
        "TP. Việt Trì","TX. Phú Thọ","H. Cẩm Khê","H. Đoan Hùng","H. Hạ Hòa","H. Lâm Thao","H. Phù Ninh","H. Tam Nông","H. Tân Sơn","H. Thanh Ba","H. Thanh Sơn","H. Thanh Thủy","H. Yên Lập",
        "TP. Hòa Bình","H. Cao Phong","H. Đà Bắc","H. Kim Bôi","H. Lạc Sơn","H. Lạc Thủy","H. Lương Sơn","H. Mai Châu","H. Tân Lạc","H. Yên Thủy"
    ],
    "Quảng Ngãi": [
        "TP. Kon Tum","H. Đắk Glei","H. Đắk Hà","H. Đắk Tô","H. Ia H'Drai","H. Kon Plông","H. Kon Rẫy","H. Ngọc Hồi","H. Sa Thầy","H. Tu Mơ Rông",
        "TP. Quảng Ngãi","H. Ba Tơ","H. Bình Sơn","H. Đức Phổ","H. Lý Sơn","H. Minh Long","H. Mộ Đức","H. Nghĩa Hành","H. Sơn Hà","H. Sơn Tây","H. Sơn Tịnh","H. Trà Bồng","H. Tư Nghĩa"
    ],
    "Quảng Ninh": ["TP. Hạ Long","TP. Móng Cái","TP. Cẩm Phả","TP. Uông Bí","TX. Đông Triều","TX. Quảng Yên","H. Ba Chẽ","H. Bình Liêu","H. Cô Tô","H. Đầm Hà","H. Hải Hà","H. Tiên Yên"],
    "Quảng Trị": [
        "TP. Đồng Hới","TX. Ba Đồn","H. Bố Trạch","H. Lệ Thủy","H. Minh Hóa","H. Quảng Ninh (QB)","H. Quảng Trạch","H. Tuyên Hóa",
        "TP. Đông Hà","TX. Quảng Trị","H. Cam Lộ","H. Cồn Cỏ","H. Đakrông","H. Gio Linh","H. Hải Lăng","H. Hướng Hóa","H. Triệu Phong","H. Vĩnh Linh"
    ],
    "Sơn La": ["TP. Sơn La","H. Bắc Yên","H. Mai Sơn","H. Mộc Châu","H. Mường La","H. Phù Yên","H. Quỳnh Nhai","H. Sông Mã","H. Sốp Cộp","H. Thuận Châu","H. Vân Hồ","H. Yên Châu"],
    "Thái Nguyên": [
        "TP. Bắc Kạn","H. Ba Bể","H. Bạch Thông","H. Chợ Đồn","H. Chợ Mới (BK)","H. Na Rì","H. Ngân Sơn","H. Pắc Nặm",
        "TP. Thái Nguyên","TX. Phổ Yên","TX. Sông Công","H. Định Hóa","H. Đồng Hỷ","H. Phú Bình","H. Phú Lương","H. Đại Từ","H. Võ Nhai"
    ],
    "Thanh Hóa": ["TP. Thanh Hóa","TX. Bỉm Sơn","TX. Sầm Sơn","H. Bá Thước","H. Cẩm Thủy","H. Đông Sơn","H. Hà Trung","H. Hậu Lộc","H. Hoằng Hóa","H. Lang Chánh","H. Mường Lát","H. Nga Sơn","H. Ngọc Lặc","H. Như Thanh","H. Như Xuân","H. Nông Cống","H. Quan Hóa","H. Quan Sơn","H. Quảng Xương","H. Thạch Thành","H. Thiệu Hóa","H. Thọ Xuân","H. Thường Xuân","H. Tĩnh Gia","H. Triệu Sơn","H. Vĩnh Lộc","H. Yên Định"],
    "Tây Ninh": [
        "TP. Tây Ninh","TX. Trảng Bàng","H. Bến Cầu","H. Châu Thành (TN)","H. Dương Minh Châu","H. Gò Dầu","H. Hòa Thành","H. Tân Biên","H. Tân Châu (TN)",
        "TP. Tân An","TX. Kiến Tường","H. Bến Lức","H. Cần Đước","H. Cần Giuộc","H. Châu Thành (LA)","H. Đức Hòa","H. Đức Huệ","H. Mộc Hóa","H. Tân Hưng","H. Tân Thạnh","H. Tân Trụ","H. Thạnh Hóa","H. Thủ Thừa","H. Vĩnh Hưng"
    ],
    "TP.HCM": [
        "Q. 1","Q. 3","Q. 4","Q. 5","Q. 6","Q. 7","Q. 8","Q. 10","Q. 11","Q. 12","Q. Bình Thạnh","Q. Bình Tân","Q. Gò Vấp","Q. Phú Nhuận","Q. Tân Bình","Q. Tân Phú","TP. Thủ Đức","H. Bình Chánh","H. Củ Chi","H. Hóc Môn","H. Nhà Bè","H. Cần Giờ",
        "TP. Vũng Tàu","TP. Bà Rịa","TX. Phú Mỹ","H. Châu Đức","H. Côn Đảo","H. Đất Đỏ","H. Long Điền","H. Xuyên Mộc",
        "TP. Thủ Dầu Một","TP. Dĩ An","TP. Thuận An","TX. Bến Cát","TX. Tân Uyên (BD)","H. Bàu Bàng","H. Bắc Tân Uyên","H. Dầu Tiếng","H. Phú Giáo"
    ],
    "Tuyên Quang": [
        "TP. Tuyên Quang","H. Chiêm Hóa","H. Hàm Yên","H. Lâm Bình","H. Na Hang","H. Sơn Dương","H. Yên Sơn",
        "TP. Hà Giang","H. Bắc Mê","H. Bắc Quang","H. Đồng Văn","H. Hoàng Su Phì","H. Mèo Vạc","H. Quản Bạ","H. Quang Bình","H. Vị Xuyên","H. Xín Mần","H. Yên Minh"
    ],
    "Vĩnh Long": [
        "TP. Bến Tre","H. Ba Tri","H. Bình Đại","H. Châu Thành (BT)","H. Chợ Lách","H. Giồng Trôm","H. Mỏ Cày Bắc","H. Mỏ Cày Nam","H. Thạnh Phú",
        "TP. Vĩnh Long","TX. Bình Minh","H. Bình Tân","H. Long Hồ","H. Mang Thít","H. Tam Bình","H. Trà Ôn","H. Vũng Liêm",
        "TP. Trà Vinh","TX. Duyên Hải","H. Càng Long","H. Cầu Kè","H. Cầu Ngang","H. Châu Thành (TV)","H. Tiểu Cần","H. Trà Cú"
    ]
};
