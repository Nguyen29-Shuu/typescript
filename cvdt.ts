interface Rectangle{
    length:number;
    width:number;
}
 function cvdt(rect:Rectangle):{area:number;perimeter:number}{
    const area=rect.length*rect.width;
    const perimeter=2*(rect.length+rect.width);
    return {area,perimeter};
 }

 const rectangle:Rectangle={
    length:20,
    width:10
 };
  const res=cvdt(rectangle);
  console.log("Diện tích:",res.area);
  console.log("Chu vi:",res.perimeter);