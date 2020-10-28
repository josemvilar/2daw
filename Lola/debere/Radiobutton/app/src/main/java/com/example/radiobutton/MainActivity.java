package com.example.radiobutton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        TextView tv = findViewById(R.id.textView);
        final RadioButton coche = findViewById(R.id.coche);
        final RadioButton moto = findViewById(R.id.moto);
        final RadioButton bus = findViewById(R.id.bus);
        final RadioButton bici = findViewById(R.id.bici);
        final RadioButton patin = findViewById(R.id.patin);
        final ImageView transporte =findViewById(R.id.imageView2);
        final ConstraintLayout todo =findViewById(R.id.todo);
        coche.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (coche.isChecked()) {
                transporte.setBackgroundResource(R.drawable.coche);
                }
            }
        });
        moto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (moto.isChecked()) {
                    transporte.setBackgroundResource(R.drawable.moto);
                }
            }
        });
        bus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (bus.isChecked()) {
                    transporte.setBackgroundResource(R.drawable.transporte);
                }
            }
        });
        bici.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (bici.isChecked()) {
                    transporte.setBackgroundResource(R.drawable.bici);
                }
            }
        });
        patin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (patin.isChecked()) {
                    transporte.setBackgroundResource(R.drawable.patin);
                }
            }
        });
    }


}