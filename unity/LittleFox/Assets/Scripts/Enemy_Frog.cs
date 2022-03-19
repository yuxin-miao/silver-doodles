using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy_Frog : Enemy
{
  private Rigidbody2D rb;
  public Collider2D coll;
  public LayerMask ground;

  public Transform leftpoint, rightpoint;
  private bool faceleft = true;
  public float speed, jumpforce;
  private float leftx, rightx;
  // Start is called before the first frame update
  protected override void Start()
  {
    base.Start();
    rb = GetComponent<Rigidbody2D>();

    leftx = leftpoint.position.x;
    rightx = rightpoint.position.x;
    Destroy(leftpoint.gameObject);
    Destroy(rightpoint.gameObject);

  }

  // Update is called once per frame
  void Update()
  {
    SwitchAnim();
  }
  void Movement()
  {
    if (faceleft)
    {
      if (transform.position.x < leftx && coll.IsTouchingLayers(ground))
      {
        transform.localScale = new Vector3(-1, 1, 1);
        faceleft = false;
      }
      if (coll.IsTouchingLayers(ground))
      {
        anim.SetBool("jumping", true);
        rb.velocity = new Vector2(-transform.localScale.x * speed, jumpforce);

      }

    }
    else
    {
      if (transform.position.x > rightx && coll.IsTouchingLayers(ground))
      {
        transform.localScale = new Vector3(1, 1, 1);
        faceleft = true;
      }
      if (coll.IsTouchingLayers(ground))
      {
        anim.SetBool("jumping", true);
        rb.velocity = new Vector2(-transform.localScale.x * speed, jumpforce);

      }

    }
  }
  void SwitchAnim()
  {
    if (rb.velocity.y < 0.1f && !coll.IsTouchingLayers(ground))
    {
      anim.SetBool("falling", true);
    }
    if (anim.GetBool("jumping"))
    {
      // begin to fall
      if (rb.velocity.y < 0)
      {
        anim.SetBool("jumping", false);
        anim.SetBool("falling", true);
      }
    }
    else if (coll.IsTouchingLayers(ground))
    {
      anim.SetBool("falling", false);
    }
  }

}

