import java.util.ArrayList;

public class Lab9 {

	interface MyInterface{
		int operation(int i,int j);
	}
	interface MyInterface2 {
		boolean operation(int i);
	}
	interface MyInterface3 {
		boolean operation(double d, double f, double e);
	}
	interface MyInterface4 {
		void operation(ArrayList<Integer> alist, int a);
	}
	
	public static void main(String[] args) {
		
		MyInterface m = (a,b)->{
			int max=0;
			for(int i=1;i<=Math.min(a,b);i++) {
				if(a%i==0 && b%i==0)
					max=i;
			}
			return max;
		};
		System.out.println(m.operation(10, 5));
		System.out.println(m.operation(7, 19));
		System.out.println(m.operation(6, 8));
		System.out.println("-----");
		
		MyInterface2 m2 = (a)->{
			int basamak=0;
			int temp=a;
			while(temp>0) {
				temp=temp/10;
				basamak++;
			}
			int toplam=0;
			
			for(int i=0;i<basamak;i++) {
				toplam+=a%10;
				a=a/10;
			}
			boolean asalmi = true;
			if(toplam!=1)
			for(int i=2;i<toplam;i++) {
				if(toplam%i==0)
					asalmi=false;
			}
			else
				asalmi=false;
			return asalmi;
			
		};
		System.out.println(m2.operation(10));
		System.out.println(m2.operation(74));
		System.out.println(m2.operation(12345));
		System.out.println("-----");
		
		MyInterface3 m3 = (a,b,c)->{
			if(a>b) {
				if((a-b)>c)
					return false;
				else
					return true;
			}
			else {
				if((b-a)>c)
					return false;
				else
					return true;
			}
		};
		
		System.out.println(m3.operation(4.01, 3.5, 0.7));
		System.out.println(m3.operation(4.01, 3.5, 0.2));
		System.out.println(m3.operation(4, 4.2, 0.2));
		
		System.out.println("-----");
		
		ArrayList<Integer> liste = new ArrayList<>(5);
		liste.add(1);
		liste.add(2);
		liste.add(7);
		liste.add(4);
		liste.add(5);
		
		MyInterface4 m4 = (x,y)->{
			x.stream().forEach(p->System.out.println(p*y));
		};
		m4.operation(liste, 13);
		
		System.out.println("----");
		
		MyInterface4 m5 = (x,y)->{
			x.stream().filter(p->p%y==0).forEach(p->System.out.println(p));
		};
		m5.operation(liste, 2);
		
	}
}
